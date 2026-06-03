"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, useRef } from "react";

interface Proposal {
  id: string;
  handle: string;
  image: string;
  caption: string;
  featured: boolean;
  order: number;
}

const EMPTY_FORM: Omit<Proposal, "id" | "order"> = {
  handle: "",
  image: "",
  caption: "",
  featured: false,
};

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function ProposalsAdminPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");

  // Add/Edit form state
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [previewError, setPreviewError] = useState(false);

  // Confirm delete
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Load ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    fetch("/api/proposals")
      .then((r) => r.json())
      .then((data) => {
        setProposals(data.sort((a: Proposal, b: Proposal) => a.order - b.order));
        setLoading(false);
      });
  }, []);

  // ─── Save to server ──────────────────────────────────────────────────────────
  async function saveProposals(data: Proposal[]) {
    setSaving(true);
    setSaveStatus("idle");
    try {
      const res = await fetch("/api/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    } finally {
      setSaving(false);
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => setSaveStatus("idle"), 3000);
    }
  }

  // ─── Reorder ─────────────────────────────────────────────────────────────────
  function move(id: string, dir: -1 | 1) {
    setProposals((prev) => {
      const arr = [...prev];
      const idx = arr.findIndex((p) => p.id === id);
      const swapIdx = idx + dir;
      if (swapIdx < 0 || swapIdx >= arr.length) return prev;
      [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];
      return arr.map((p, i) => ({ ...p, order: i }));
    });
  }

  // ─── Open form for add/edit ───────────────────────────────────────────────────
  function openAdd() {
    setEditingId(null);
    setForm({ ...EMPTY_FORM });
    setPreviewError(false);
    setShowForm(true);
  }

  function openEdit(p: Proposal) {
    setEditingId(p.id);
    setForm({ handle: p.handle, image: p.image, caption: p.caption, featured: p.featured });
    setPreviewError(false);
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
  }

  // ─── Submit add/edit ─────────────────────────────────────────────────────────
  function submitForm() {
    if (!form.handle.trim() || !form.image.trim()) return;
    setProposals((prev) => {
      if (editingId) {
        return prev.map((p) =>
          p.id === editingId ? { ...p, ...form } : p
        );
      }
      const newEntry: Proposal = {
        ...form,
        id: generateId(),
        order: prev.length,
      };
      return [...prev, newEntry];
    });
    setShowForm(false);
    setEditingId(null);
  }

  // ─── Delete ──────────────────────────────────────────────────────────────────
  function confirmDelete(id: string) {
    setDeleteConfirmId(id);
  }

  function executeDelete(id: string) {
    setProposals((prev) =>
      prev.filter((p) => p.id !== id).map((p, i) => ({ ...p, order: i }))
    );
    setDeleteConfirmId(null);
  }

  // ─── Render ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-5xl text-primary-custom animate-pulse">
            favorite
          </span>
          <p className="font-label tracking-widest text-xs uppercase text-on-surface-variant">
            Loading proposals…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto">
      {/* ── Page Header ── */}
      <div className="flex items-start justify-between mb-10 gap-4 flex-wrap">
        <div>
          <h1 className="font-headline text-3xl text-on-surface mb-1">
            Proposals Gallery
          </h1>
          <p className="text-on-surface-variant text-sm font-body">
            Manage the &quot;Say Yes with Zewd&quot; couple stories shown on the homepage.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Save status pill */}
          {saveStatus === "saved" && (
            <span className="flex items-center gap-1.5 text-xs font-label tracking-wider text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Saved to site
            </span>
          )}
          {saveStatus === "error" && (
            <span className="flex items-center gap-1.5 text-xs font-label tracking-wider text-red-400 bg-red-400/10 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">error</span>
              Save failed
            </span>
          )}

          <button
            id="btn-add-proposal"
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-2.5 border border-primary-container-custom text-primary-container-custom font-label text-xs tracking-widest uppercase hover:bg-primary-container-custom hover:text-on-background transition-all duration-300 rounded-sm"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Add Couple
          </button>

          <button
            id="btn-save-proposals"
            onClick={() => saveProposals(proposals)}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 hero-gradient text-on-primary font-label text-xs tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-sm">
              {saving ? "sync" : "publish"}
            </span>
            {saving ? "Saving…" : "Publish to Site"}
          </button>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: "Total Couples", value: proposals.length, icon: "favorite" },
          { label: "Featured (Avatar Strip)", value: proposals.filter((p) => p.featured).length, icon: "star" },
          { label: "Gallery Cards", value: proposals.length, icon: "grid_view" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-custom text-lg">{stat.icon}</span>
              <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
                {stat.label}
              </span>
            </div>
            <span className="font-headline text-3xl text-on-surface">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* ── Cards grid ── */}
      {proposals.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border border-dashed border-outline-variant/30 rounded-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-5xl mb-4 opacity-30">favorite_border</span>
          <p className="font-body text-sm">No proposals yet. Add the first couple!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {proposals.map((p, idx) => (
            <div
              key={p.id}
              id={`proposal-card-${p.id}`}
              className="group relative bg-surface-container-low border border-outline-variant/10 rounded-sm overflow-hidden hover:border-primary-container-custom/40 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  src={p.image}
                  alt={p.handle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23162a3d'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23c1a27a' font-size='14' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Featured badge */}
                {p.featured && (
                  <div className="absolute top-3 left-3 bg-primary-container-custom/90 backdrop-blur-sm text-on-background text-[9px] font-label tracking-widest uppercase px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px]">star</span>
                    Featured
                  </div>
                )}

                {/* Order badge */}
                <div className="absolute top-3 right-3 w-6 h-6 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-[10px] font-label">
                  {idx + 1}
                </div>

                {/* Hover overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    id={`btn-edit-${p.id}`}
                    onClick={() => openEdit(p)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all"
                    title="Edit"
                  >
                    <span className="material-symbols-outlined text-white text-sm">edit</span>
                  </button>
                  <button
                    id={`btn-delete-${p.id}`}
                    onClick={() => confirmDelete(p.id)}
                    className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm border border-red-400/30 flex items-center justify-center transition-all"
                    title="Delete"
                  >
                    <span className="material-symbols-outlined text-red-300 text-sm">delete</span>
                  </button>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <p className="font-label text-xs tracking-wider text-primary-container-custom mb-1">
                  {p.handle}
                </p>
                {p.caption && (
                  <p className="font-body text-[11px] text-on-surface-variant leading-relaxed line-clamp-2">
                    {p.caption}
                  </p>
                )}
              </div>

              {/* Reorder controls */}
              <div className="flex border-t border-outline-variant/10">
                <button
                  onClick={() => move(p.id, -1)}
                  disabled={idx === 0}
                  className="flex-1 py-2 flex items-center justify-center text-on-surface-variant hover:text-primary-custom hover:bg-surface-container-high transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                  title="Move up"
                >
                  <span className="material-symbols-outlined text-sm">arrow_upward</span>
                </button>
                <div className="w-px bg-outline-variant/10" />
                <button
                  onClick={() => move(p.id, 1)}
                  disabled={idx === proposals.length - 1}
                  className="flex-1 py-2 flex items-center justify-center text-on-surface-variant hover:text-primary-custom hover:bg-surface-container-high transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
                  title="Move down"
                >
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Add / Edit Modal ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={(e) => e.target === e.currentTarget && cancelForm()}
        >
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-sm w-full max-w-lg shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/10">
              <div>
                <h2 className="font-headline text-xl text-on-surface">
                  {editingId ? "Edit Proposal" : "Add New Couple"}
                </h2>
                <p className="text-on-surface-variant text-xs font-body mt-0.5">
                  {editingId ? "Update the details below" : "Fill in the couple's details"}
                </p>
              </div>
              <button
                onClick={cancelForm}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            {/* Form */}
            <div className="px-8 py-6 space-y-5">
              {/* Image URL */}
              <div>
                <label className="block font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
                  Photo URL *
                </label>
                <input
                  id="input-image-url"
                  type="url"
                  value={form.image}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, image: e.target.value }));
                    setPreviewError(false);
                  }}
                  placeholder="https://images.unsplash.com/…"
                  className="w-full bg-surface-container border border-outline-variant/20 text-on-surface text-sm font-body px-4 py-3 rounded-sm focus:outline-none focus:border-primary-container-custom transition-colors"
                />
                {/* Inline preview */}
                {form.image && (
                  <div className="mt-3 w-24 h-32 rounded-sm overflow-hidden border border-outline-variant/20 bg-surface-container">
                    <img
                      src={form.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={() => setPreviewError(true)}
                    />
                    {previewError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-surface-container text-on-surface-variant text-xs">
                        Invalid URL
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Handle */}
              <div>
                <label className="block font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
                  Social Handle *
                </label>
                <input
                  id="input-handle"
                  type="text"
                  value={form.handle}
                  onChange={(e) => setForm((f) => ({ ...f, handle: e.target.value }))}
                  placeholder="@theirhandle"
                  className="w-full bg-surface-container border border-outline-variant/20 text-on-surface text-sm font-body px-4 py-3 rounded-sm focus:outline-none focus:border-primary-container-custom transition-colors"
                />
              </div>

              {/* Caption */}
              <div>
                <label className="block font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
                  Caption
                  <span className="ml-1 normal-case tracking-normal opacity-50">(optional)</span>
                </label>
                <textarea
                  id="input-caption"
                  value={form.caption}
                  onChange={(e) => setForm((f) => ({ ...f, caption: e.target.value }))}
                  placeholder="She said YES! 💍"
                  rows={2}
                  className="w-full bg-surface-container border border-outline-variant/20 text-on-surface text-sm font-body px-4 py-3 rounded-sm focus:outline-none focus:border-primary-container-custom transition-colors resize-none"
                />
              </div>

              {/* Featured toggle */}
              <div className="flex items-center justify-between bg-surface-container px-4 py-3 rounded-sm border border-outline-variant/10">
                <div>
                  <p className="font-label text-[10px] tracking-widest uppercase text-on-surface">
                    Featured
                  </p>
                  <p className="text-on-surface-variant text-[11px] font-body mt-0.5">
                    Show in avatar strip at the bottom
                  </p>
                </div>
                <button
                  id="toggle-featured"
                  onClick={() => setForm((f) => ({ ...f, featured: !f.featured }))}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                    form.featured ? "bg-primary-container-custom" : "bg-outline-variant/30"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                      form.featured ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-8 py-5 border-t border-outline-variant/10">
              <button
                onClick={cancelForm}
                className="px-5 py-2.5 text-on-surface-variant font-label text-xs tracking-widest uppercase hover:text-on-surface transition-colors"
              >
                Cancel
              </button>
              <button
                id="btn-submit-proposal"
                onClick={submitForm}
                disabled={!form.handle.trim() || !form.image.trim()}
                className="px-6 py-2.5 hero-gradient text-on-primary font-label text-xs tracking-widest uppercase rounded-sm hover:shadow-lg transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {editingId ? "Save Changes" : "Add to Gallery"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation ── */}
      {deleteConfirmId && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={(e) => e.target === e.currentTarget && setDeleteConfirmId(null)}
        >
          <div className="bg-surface-container-low border border-outline-variant/20 rounded-sm w-full max-w-sm shadow-2xl p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-red-400 mb-4 block">delete_forever</span>
            <h3 className="font-headline text-xl text-on-surface mb-2">Remove this couple?</h3>
            <p className="text-on-surface-variant text-sm font-body mb-6">
              This will remove them from the gallery. You&apos;ll need to click{" "}
              <strong className="text-primary-container-custom">Publish to Site</strong> to make it live.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 border border-outline-variant/20 text-on-surface-variant font-label text-xs tracking-widest uppercase hover:bg-surface-container-high transition-all rounded-sm"
              >
                Cancel
              </button>
              <button
                id="btn-confirm-delete"
                onClick={() => executeDelete(deleteConfirmId)}
                className="flex-1 py-2.5 bg-red-500/80 hover:bg-red-500 text-white font-label text-xs tracking-widest uppercase transition-all rounded-sm"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
