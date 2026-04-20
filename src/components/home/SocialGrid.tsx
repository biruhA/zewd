/* eslint-disable @next/next/no-img-element */
export default function SocialGrid() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-12">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-headline tracking-tight">AS SEEN ON <span className="italic">#THEATELIER</span></h2>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer text-primary-custom/40 hover:text-primary-custom transition-colors">chevron_left</span>
            <span className="material-symbols-outlined cursor-pointer text-primary-custom/40 hover:text-primary-custom transition-colors">chevron_right</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="aspect-square bg-surface-container overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8n1X_ReZr_F3HrPdZeG_mzzWB2QGhqcdQ4uhyC_stE3608vCSS_TQaFql5xdXMM9Z6N1lvbM37gZMMZyfYf7G7BRlzu3ia6H5w5ydr-k69XSg-UiCbGVAo1S-AutP-bQIBcOzfjhCmlvwX2A2FX-kqosheRtgqr_ptVTfKTsIZ7hOO1cE0KzR85ZpIzj9_T5CfowCANwupkeaUGQ6rJB1GQo2jP0aQwH_mXBJ7qcfGHXAGmGCZ6sjH9_HgJtn9olatdUTBTkFz5U" 
              alt="Jewelry box on a marble table" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
          </div>
          <div className="aspect-square bg-surface-container overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx2Nj6onnh-smxy_YwDOCeJWTRHq1K_wenj4PSHNJxpZSq4ykf53DuSQ6P3V7KilfkFiBTEaOCVqQBoaKfnIvhriNJb-0rtK3m7BxRgbuA1InWvZnBH8ZsYc-5OzUoD6GckEEPi7hXlJ_ENNXw0-3QLThi1JPqj9aZU7r8-HojtYfpE963jqFL0-UqXg7rJFuG9NmgYohRm2KnFR-zpw2LUTaa2N_9vNHzg3m241hX-ecW9nigKmrUmjityaupBcKQdeYJDicfCuY" 
              alt="Bride wearing elegant diamond drop earrings" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
          </div>
          <div className="aspect-square bg-surface-container overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUA1mLjN8N7PfdTYvJEtYzSm8qE8WGQqMDH7MoWAI-7PjHiHFPn7CT195CVo41ffNJycwULZeWIhMpPybAGqBwlyCbW7oECk77uvjoBwZ_cG9vA-gLJL_3nToQMxtYzrswKmnk2ZVWNY4tMHQsq4oOIJcFVEr7Gw1SBAzR7BcBuS79OqpRv9iB7eH0tTzbMN0YPL7f9PpTEdy9uFhum1lOzOYDMInZO_m6QYN6gWOFAUre5mGUVIS6bjltq6mDIjj8yfZ5pafXv0U" 
              alt="Diamond necklace reflecting light" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
          </div>
          <div className="aspect-square bg-surface-container overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlrSL5-V8SSBRwMV8BamfPN6f_OuzMyjNVLksotNx-BY5Esfn3AKvvvJClAbiEUC7i5-A7gklofdp0_mRSVDYv3mTwsdGu60IzbTR1qeAQhUTmgtbf-TNV5qHRArEKViiUrTQTyR5ZL5JWQ-s5IBKSRvTgdT74Z5yr5g1dd5dyUpfNQLSv9k1hX5m-Q8WllZoCc3BLrL_X9LRpJWg6ILbTyTS6XLiTavKXK-wrOcZQEWz0UcY_qpzsnlAfysKBjRVN0tQGr7weAQQ" 
              alt="Emerald cut diamond engagement ring" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
          </div>
          <div className="aspect-square bg-surface-container overflow-hidden group hidden lg:block">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuruPG9i5A6_yunuJuBQDpZhqo7mBZXAgNOCnrDJ_0neEwWVE-MCqAFroelH1tm_K4INT4k8iMcPWfJCXtFpC8gK16MKRXwwQo1mBECIaKycohiGWkazbt-3ehEYUbh1GXsr6lIXCDX_Ub88mE7pYGVXtf2Q8GRcqu7E3o9Xen0rCps8P5i-3e-fnA9YYa81cdvLoBqXsYXyFJ7Kygb4y-yOexIwIjZDS9ivSx0zWyTNyuyTM3O1akKDZA2AmARxW6qbTSm1MkMO4" 
              alt="Modern woman wearing layering diamond necklaces" 
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
