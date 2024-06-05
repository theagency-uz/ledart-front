'use client';

import Script from 'next/script';

export default function AllScripts() {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* <!-- Google Tag Manager --> */}

      <Script
        id='gtm-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P57BD744');`,
        }}
      />
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- FB Pixel --> */}
      <Script
        id='fb-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1570887483708573');
fbq('track', 'PageView');
          `,
        }}
      />
      {/* <!-- End FB Pixel --> */}
      {/* <!-- Yandex.Metrika counter --> */}
      <Script
        id='ym-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(96962357, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
          `,
        }}
      />

      {/* <!-- /Yandex.Metrika counter --> */}

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-P57BD744'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      {/* <!-- FB Pixel (noscript) --> */}
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1570887483708573&ev=PageView&noscript=1'
        />
      </noscript>
      {/* <!-- End FB Pixel (noscript) --> */}

      {/* <!-- YM (noscript) --> */}
      <noscript>
        <div>
          <img
            src='https://mc.yandex.ru/watch/96962357'
            style={{ position: 'absolute', left: '-9999px' }}
            alt=''
          />
        </div>
      </noscript>
      {/* <!-- End YM (noscript) --> */}
    </>
  );
}
