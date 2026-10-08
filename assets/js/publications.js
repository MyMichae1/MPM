(() => {
  const newsletters = [
    {
      slug: 'mei',
      month: 'Mei',
      title: 'Bertumbuh dari Pengetahuan Lokal',
      theme: 'Pertanian dan pembelajaran bersama masyarakat',
      image: 'assets/images/newsletter-mei.svg',
      imageAlt: 'Ilustrasi sampul newsletter edisi Mei tentang pertanian',
      summary: 'Edisi ini mengangkat pentingnya pengetahuan lokal dan pengalaman petani sebagai bagian dari proses belajar dan membangun pertanian yang berkelanjutan.',
      articles: [
        {
          heading: 'Belajar dari lahan dan pengalaman petani',
          paragraphs: [
            'Lahan pertanian dapat menjadi ruang belajar terbuka. Pengamatan terhadap tanah, tanaman, air, dan musim membantu menghubungkan pengetahuan dengan kehidupan sehari-hari.',
            'Pengalaman petani menyimpan pemahaman yang tumbuh dari praktik dan pengamatan berulang. Ketika pengetahuan itu dibagikan dan didiskusikan bersama, muncul kesempatan untuk belajar secara setara dan mencari pilihan yang sesuai dengan kondisi setempat.'
          ]
        },
        {
          heading: 'Menumbuhkan pertanian yang tangguh',
          paragraphs: [
            'Pertanian yang berkelanjutan berawal dari kepedulian pada kesehatan tanah, keragaman tanaman, dan kemampuan masyarakat beradaptasi. Langkah kecil yang direncanakan bersama dapat menjadi awal perubahan yang lebih luas.'
          ]
        }
      ]
    },
    {
      slug: 'juni',
      month: 'Juni',
      title: 'Merawat Lingkungan, Menjaga Kehidupan',
      theme: 'Keanekaragaman hayati dan aksi lingkungan',
      image: 'assets/images/newsletter-juni.svg',
      imageAlt: 'Ilustrasi sampul newsletter edisi Juni tentang lingkungan',
      summary: 'Edisi ini mengajak pembaca melihat hubungan antara lingkungan yang sehat, keanekaragaman hayati, dan kesejahteraan masyarakat.',
      articles: [
        {
          heading: 'Keanekaragaman hayati dekat dengan kita',
          paragraphs: [
            'Tumbuhan, satwa, air, dan ruang hidup di sekitar kita saling berhubungan. Menjaga keanekaragaman hayati berarti turut merawat sumber penghidupan dan keseimbangan lingkungan.',
            'Mengenali kekayaan alam setempat merupakan langkah awal untuk melindunginya. Pengetahuan warga dapat membantu menentukan hal-hal yang perlu dijaga dan kebiasaan yang dapat diperbaiki.'
          ]
        },
        {
          heading: 'Aksi lingkungan dimulai bersama',
          paragraphs: [
            'Kepedulian tumbuh melalui tindakan yang dapat dilakukan bersama, seperti mengurangi sampah, merawat tanaman, dan berbagi informasi mengenai lingkungan. Kerja sama lintas kelompok membuat upaya tersebut lebih kuat dan berkelanjutan.'
          ]
        }
      ]
    },
    {
      slug: 'juli',
      month: 'Juli',
      title: 'Belajar, Beradaptasi, dan Siaga',
      theme: 'Pengurangan risiko bencana dan perubahan iklim',
      image: 'assets/images/newsletter-juli.svg',
      imageAlt: 'Ilustrasi sampul newsletter edisi Juli tentang kesiapsiagaan',
      summary: 'Edisi ini membahas kesiapsiagaan sebagai proses belajar bersama untuk mengenali risiko dan memperkuat langkah perlindungan masyarakat.',
      articles: [
        {
          heading: 'Mengenali risiko di sekitar',
          paragraphs: [
            'Setiap wilayah memiliki kondisi dan risiko yang berbeda. Mengenali lingkungan, jalur akses, sumber daya, dan kelompok yang membutuhkan dukungan membantu masyarakat menyiapkan langkah yang lebih tepat.',
            'Pengetahuan lokal menjadi penting dalam membaca perubahan dan menyampaikan informasi. Percakapan warga dapat membantu mengidentifikasi kebutuhan sebelum keadaan darurat terjadi.'
          ]
        },
        {
          heading: 'Kesiapsiagaan adalah kerja bersama',
          paragraphs: [
            'Rencana yang dipahami bersama, komunikasi yang jelas, dan latihan berkala dapat mendukung kesiapsiagaan. Perhatian pada anak-anak, lansia, penyandang disabilitas, dan warga yang membutuhkan dukungan khusus perlu menjadi bagian dari perencanaan.'
          ]
        }
      ]
    },
    {
      slug: 'agustus',
      month: 'Agustus',
      title: 'Kolaborasi untuk Pertanian Tangguh',
      theme: 'Kemitraan, pangan, dan adaptasi iklim',
      image: 'assets/images/newsletter-agustus.svg',
      imageAlt: 'Ilustrasi sampul newsletter edisi Agustus tentang pertanian',
      summary: 'Edisi ini menyoroti pentingnya kolaborasi dalam merawat sumber pangan dan menghadapi perubahan kondisi lingkungan.',
      articles: [
        {
          heading: 'Pangan tumbuh dari kerja bersama',
          paragraphs: [
            'Sistem pangan yang kuat membutuhkan keterlibatan petani, keluarga, komunitas, dan berbagai pihak pendukung. Berbagi pengalaman dapat membuka ruang untuk menemukan pendekatan yang sesuai dengan keadaan lokal.',
            'Keragaman tanaman dan praktik budidaya yang memperhatikan lingkungan dapat menjadi bagian dari upaya menjaga sumber pangan sekaligus merawat ekosistem.'
          ]
        },
        {
          heading: 'Adaptasi dimulai dengan mendengar',
          paragraphs: [
            'Perubahan iklim dirasakan dalam kehidupan dan penghidupan sehari-hari. Mendengarkan pengalaman masyarakat membantu memahami kebutuhan dan menentukan langkah adaptasi yang dapat dilakukan bersama.'
          ]
        }
      ]
    },
    {
      slug: 'september',
      month: 'September 2026',
      editionLabel: 'Edisi 007 · September 2026',
      title: 'Dari Aksi Lokal Menuju Ketangguhan Iklim',
      theme: 'Belajar, berinovasi, dan berkolaborasi untuk masyarakat yang tangguh dan berkelanjutan',
      image: 'assets/images/newsletter-september-2026.png',
      imageAlt: 'Sampul Newsletter MPM edisi 007, September 2026',
      summary: 'Belajar, berinovasi, berkolaborasi, dan mengembangkan potensi masyarakat untuk membangun pertanian, lingkungan, dan komunitas yang lebih tangguh dan berkelanjutan.',
      author: 'penamasmotivator.org',
      date: '2026-09',
      dateLabel: 'September 2026',
      tags: ['Pertanian', 'Perubahan Iklim', 'RYCAM', 'Petani Muda', 'Kompos'],
      pdf: 'assets/publications/newsletter-mpm-edisi-007.pdf',
      articles: []
    }
  ];

  const scriptUrl = new URL(document.currentScript.src);
  const projectRoot = new URL('../../', scriptUrl);

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function createNewsletterCard(issue) {
    const link = makeElement('a', 'blog-card publication-card flex flex-col h-full bg-white');
    link.href = new URL(`pages/newsletter.html?edisi=${issue.slug}`, projectRoot).href;
    link.setAttribute('aria-label', `Buka Newsletter ${issue.month}: ${issue.title}`);

    const cover = makeElement('div', 'img-wrapper publication-cover');
    const image = document.createElement('img');
    image.src = new URL(issue.image, projectRoot).href;
    image.alt = issue.imageAlt;
    cover.append(image);

    const content = makeElement('div', 'p-6 flex flex-col flex-grow');
    const month = makeElement('span', 'text-sm text-primary font-semibold mb-2', `Newsletter · ${issue.editionLabel || `Edisi ${issue.month}`}`);
    const title = makeElement('h2', 'text-xl font-bold text-gray-900 mb-3 line-clamp-2', issue.title);
    const summary = makeElement('p', 'text-gray-600 mb-4 flex-grow line-clamp-3', issue.summary);
    const open = makeElement('span', 'text-primary font-semibold mt-auto', 'Baca newsletter →');
    content.append(month, title, summary, open);
    link.append(cover, content);
    return link;
  }

  document.querySelectorAll('[data-newsletter-list]').forEach(container => {
    newsletters.forEach(issue => container.append(createNewsletterCard(issue)));
  });

  const issueSlug = new URLSearchParams(window.location.search).get('edisi');
  const issue = newsletters.find(item => item.slug === issueSlug);
  const articleRoot = document.querySelector('[data-newsletter-article]');
  document.querySelectorAll('[data-newsletter-related]').forEach(container => {
    newsletters
      .filter(item => item.slug !== issueSlug)
      .slice()
      .reverse()
      .slice(0, 3)
      .forEach(item => container.append(createNewsletterCard(item)));
  });

  if (articleRoot) {
    if (!issue) {
      document.title = 'Newsletter tidak ditemukan - Yayasan MPM';
      articleRoot.replaceChildren(
        makeElement('h1', 'text-3xl font-bold text-gray-900 mb-4', 'Newsletter tidak ditemukan'),
        makeElement('p', 'text-gray-600', 'Pilih edisi newsletter dari halaman publikasi.')
      );
      return;
    }

    document.title = `Newsletter ${issue.month}: ${issue.title} - Yayasan MPM`;
    document.querySelectorAll('[data-newsletter-title]').forEach(element => {
      element.textContent = `Newsletter ${issue.month}: ${issue.title}`;
    });
    document.querySelectorAll('[data-newsletter-month]').forEach(element => {
      element.textContent = issue.editionLabel || `Edisi ${issue.month}`;
    });
    document.querySelectorAll('[data-newsletter-summary]').forEach(element => {
      element.textContent = issue.summary;
    });
    const cover = document.querySelector('[data-newsletter-cover]');
    if (cover) {
      cover.src = new URL(issue.image, projectRoot).href;
      cover.alt = issue.imageAlt;
    }

    if (issue.author && issue.date && issue.tags) {
      const engagement = document.querySelector('[data-newsletter-engagement]');
      if (engagement) {
        engagement.hidden = false;
        engagement.dataset.blogEngagement = 'newsletter-september-2026';
        engagement.dataset.author = issue.author;
        engagement.dataset.date = issue.date;
        engagement.dataset.dateLabel = issue.dateLabel;
        engagement.dataset.tags = issue.tags.join('|');
      }
    }

    if (issue.pdf) {
      const draftNotice = document.querySelector('[data-newsletter-draft-notice]');
      if (draftNotice) draftNotice.hidden = true;

      const pdfUrl = new URL(issue.pdf, projectRoot).href;
      const downloadPrompt = makeElement(
        'p',
        'text-gray-700 mb-4',
        `Ingin membaca newsletter lengkap edisi ${issue.month}? Unduh PDF-nya melalui tombol berikut.`
      );
      const download = makeElement('a', 'btn btn-outline mb-6', 'Unduh Newsletter September 2026 (PDF)');
      download.href = pdfUrl;
      download.download = 'newsletter-mpm-edisi-007.pdf';
      articleRoot.replaceChildren(downloadPrompt, download);
    } else {
      issue.articles.forEach(article => {
        articleRoot.append(makeElement('h2', 'text-2xl font-bold text-gray-900 mt-10 mb-4', article.heading));
        article.paragraphs.forEach(paragraph => {
          articleRoot.append(makeElement('p', '', paragraph));
        });
      });
    }
  }
})();
