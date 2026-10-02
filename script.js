/* ─── Loading Screen ─── */
    window.addEventListener('load', () => {
      const loader = document.getElementById('loadingScreen');
      const loaderText = document.getElementById('loaderText');
      const loaderBarWrap = document.getElementById('loaderBarWrap');
      const enterBtn = document.getElementById('enterBtn');

      if (loader && enterBtn) {
        // Wait a short moment to let the progress bar animation finish
        setTimeout(() => {
          if (loaderText) loaderText.classList.add('hidden');
          if (loaderBarWrap) loaderBarWrap.classList.add('hidden');
          enterBtn.classList.remove('hidden');
        }, 1800);

        // When the user taps the button, play music and hide the loader
        enterBtn.addEventListener('click', () => {
          const bgMusic = document.getElementById('bgMusic');
          if (bgMusic) {
            bgMusic.volume = 0.5; // Optional: set initial volume to 50%
            bgMusic.play().catch(err => console.log("Audio play failed:", err));
          }
          loader.classList.add('hidden');
        });
      }
    });

    /* ─── Image list ─── */
    const allImgs = Array.from({ length: 10 }, (_, i) => `img/iiimggg (${i + 1}).jpg`);
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);


    /* ══════════════════════════════════════════
       1. HERO – Single Portrait (static HTML, no JS needed)
    ══════════════════════════════════════════ */


    /* ══════════════════════════════════════════
       2. EMOJI PHOTO STRIP
    ══════════════════════════════════════════ */
    (function buildEmojiStrip() {
      const track = document.getElementById('emojiStrip');
      const imgs = shuffle(allImgs);
      const emojis = ['💖', '✨', '🌸', '🦋', '🌟', '💫', '🎂', '🎉', '👑', '🔮', '🎀', '💝', '🌺', '🌈', '🧸', '🌜', '💎', '🍸', '🎶', '🍃', '💕', '😍', '🥰', '💜', '🧡', '💛', '🌻', '🌷', '🥀', '🌿', '🍀', '🌼', '🌹', '🌞'];
      const captions = [
        'Precious', 'Sparkling', 'Radiant', 'Graceful', 'Stunning',
        'Magical', 'Celebrate!', 'Party time', 'Queen', 'Dreamy',
        'Adorable', 'Beloved', 'Gorgeous', 'Rainbow', 'Cuddly',
        'Moonlight', 'Gem', 'Cheers', 'Melody', 'Autumn',
        'Love', 'Heart eyes', 'Loving', 'Purple love', 'Warm',
        'Golden', 'Sunflower', 'Tulip', 'Rose', 'Leafy',
        'Lucky', 'Daisy', 'Red rose', 'Sunshine'
      ];
      const floatEmojis = ['❤️', '💋', '🌟', '💫', '🌸', '💖', '✨', '🦋', '🌹', '💝', '🌺', '🎀', '🎂', '🎉', '👑', '🔮', '🌻', '🌷', '🥀', '🌿', '🍀', '🌼', '🌹', '🌞', '💜', '🧡', '💛', '🍃', '💕', '😍', '🥰', '💎', '🍸', '🎶'];

      // duplicate for infinite scroll
      const doubled = [...imgs, ...imgs];
      doubled.forEach((src, i) => {
        const idx = i % imgs.length;
        const card = document.createElement('div');
        card.className = 'emoji-card';
        card.innerHTML = `
        <img src="${src}" alt="Ananya Singh Rajput" loading="lazy"/>
        <span class="emoji-sticker">${emojis[idx % emojis.length]}</span>
        <span class="emoji-float emoji-float-tl">${floatEmojis[(idx + 3) % floatEmojis.length]}</span>
        <span class="emoji-float emoji-float-bl">${floatEmojis[(idx + 7) % floatEmojis.length]}</span>
        <div class="emoji-card-caption">
          <span class="caption-emoji">${emojis[(idx + 5) % emojis.length]}</span>
          <span class="caption-text">${captions[idx % captions.length]}</span>
        </div>`;
        track.appendChild(card);
      });
    })();


    /* ══════════════════════════════════════════
       3. HEXAGONAL MOSAIC
    ══════════════════════════════════════════ */
    (function buildHexGrid() {
      const grid = document.getElementById('hexGrid');
      const imgs = shuffle(allImgs).slice(0, 12);
      imgs.forEach(src => {
        const hex = document.createElement('div');
        hex.className = 'hex-item';
        hex.innerHTML = `<img src="${src}" alt="Ananya Singh Rajput" loading="lazy"/>`;
        grid.appendChild(hex);
      });
    })();


    /* ══════════════════════════════════════════
       4. 3D CAROUSEL
    ══════════════════════════════════════════ */
    (function buildCarousel() {
      const container = document.getElementById('carouselContainer');
      const imgs = shuffle(allImgs).slice(0, 8);
      const labels = ['Radiant ✨', 'Gorgeous 🌸', 'Magical 💫', 'Stunning 🦋',
        'Glowing 🌟', 'Beautiful 💖', 'Elegant 👑', 'Divine 🔮'];
      const count = imgs.length;
      const angleStep = 360 / count;
      const radius = 380;

      imgs.forEach((src, i) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.style.transform = `rotateY(${angleStep * i}deg) translateZ(${radius}px)`;
        card.innerHTML = `
        <img src="${src}" alt="Ananya Singh Rajput" loading="lazy"/>
        <span class="c-label">${labels[i]}</span>`;
        container.appendChild(card);
      });
    })();


    /* ══════════════════════════════════════════
       5. MASONRY PHOTO GRID
    ══════════════════════════════════════════ */
    (function buildMasonryGrid() {
      const grid = document.getElementById('masonryGrid');
      const imgs = shuffle(allImgs).slice(0, 12);
      const sizes = ['m-tall', '', 'm-wide', '', 'm-big', '', 'm-tall', 'm-wide', '', '', 'm-tall', ''];
      const captions = [
        { emoji: '💖', text: 'Precious' },
        { emoji: '✨', text: 'Sparkling' },
        { emoji: '🌸', text: 'Radiant' },
        { emoji: '🦋', text: 'Graceful' },
        { emoji: '🌟', text: 'Stunning' },
        { emoji: '💫', text: 'Magical' },
        { emoji: '👑', text: 'Queen' },
        { emoji: '🔮', text: 'Dreamy' },
        { emoji: '🎀', text: 'Adorable' },
        { emoji: '💝', text: 'Beloved' },
        { emoji: '🌺', text: 'Gorgeous' },
        { emoji: '🎂', text: 'Celebrate!' },
      ];

      imgs.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = `masonry-item ${sizes[i]}`;
        item.innerHTML = `
        <img src="${src}" alt="Ananya Singh Rajput" loading="lazy"/>
        <div class="masonry-overlay">
          <span class="m-emoji">${captions[i].emoji}</span>
          <span class="m-text">${captions[i].text}</span>
        </div>`;
        grid.appendChild(item);
      });
    })();


    /* ══════════════════════════════════════════
       6. BOOK OF MOMENTS – Horizontal Scroll
    ══════════════════════════════════════════ */
    (function buildBookOfMoments() {
      const track = document.getElementById('bookTrack');
      const imgs = shuffle(allImgs).slice(0, 8);
      const pages = [
        { quote: 'The beginning of something beautiful...', tag: 'Chapter One 🌅' },
        { quote: 'Blooming with grace and unmatched elegance', tag: 'Growing 🌸' },
        { quote: 'Her smile could light up the darkest skies', tag: 'Radiance ✨' },
        { quote: 'Dancing through life with pure, infectious joy', tag: 'Joyful 🎶' },
        { quote: 'Spreading love and warmth wherever she goes', tag: 'Love 💖' },
        { quote: 'Every moment with her is a treasure to keep', tag: 'Precious 💎' },
        { quote: 'She makes the ordinary feel extraordinary', tag: 'Magic 🔮' },
        { quote: 'And today, the whole world celebrates YOU!', tag: 'Birthday 🎂' },
      ];

      imgs.forEach((src, i) => {
        const page = document.createElement('div');
        page.className = 'book-page';
        page.innerHTML = `
        <img src="${src}" alt="Ananya Singh Rajput" loading="lazy"/>
        <div class="book-page-body">
          <div class="book-page-num">${i + 1}</div>
          <p class="book-page-quote">"${pages[i].quote}"</p>
          <span class="book-page-tag">${pages[i].tag}</span>
        </div>`;
        track.appendChild(page);
      });
    })();


    /* ══════════════════════════════════════════
       STARS
    ══════════════════════════════════════════ */
    (function buildStars() {
      const wrap = document.getElementById('starsWrap');
      for (let i = 0; i < 140; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const size = Math.random() * 2.5 + 0.5;
        s.style.cssText = `
        width:${size}px; height:${size}px;
        top:${Math.random() * 100}%;
        left:${Math.random() * 100}%;
        --d:${(Math.random() * 3 + 1.5).toFixed(1)}s;
        animation-delay:${(Math.random() * 4).toFixed(1)}s;
      `;
        wrap.appendChild(s);
      }
    })();


    /* ══════════════════════════════════════════
       FLOATING PARTICLES
    ══════════════════════════════════════════ */
    (function buildParticles() {
      const emojis = ['🎈', '💖', '🌟', '✨', '🎉', '🎊', '💫', '🌸', '🦋', '🎀', '💝', '🥳'];
      const pw = document.getElementById('particleWrap');
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        p.style.cssText = `
        left:${Math.random() * 100}%;
        --s:${(Math.random() * 1.4 + 0.8).toFixed(1)}rem;
        --d:${(Math.random() * 8 + 5).toFixed(1)}s;
        --delay:${(Math.random() * 10).toFixed(1)}s;
      `;
        pw.appendChild(p);
      }
    })();


    /* ══════════════════════════════════════════
       CSS FIREWORKS
    ══════════════════════════════════════════ */
    const fwWrap = document.getElementById('fireworksWrap');
    const fwColors = ['#ffd700', '#ff4e8a', '#c94bff', '#00e0ff', '#ff6b35', '#fff'];
    function spawnFirework() {
      const cx = Math.random() * 80 + 10;
      const cy = Math.random() * 50 + 5;
      const color = fwColors[Math.floor(Math.random() * fwColors.length)];
      for (let k = 0; k < 14; k++) {
        const angle = (k / 14) * 360;
        const dist = 60 + Math.random() * 60;
        const rad = angle * (Math.PI / 180);
        const dot = document.createElement('div');
        dot.className = 'fw';
        dot.style.cssText = `
        left:${cx}vw; top:${cy}vh;
        background:${color};
        box-shadow:0 0 6px 2px ${color};
        --tx:${(Math.cos(rad) * dist).toFixed(0)}px;
        --ty:${(Math.sin(rad) * dist).toFixed(0)}px;
        --d:${(0.8 + Math.random() * 0.5).toFixed(2)}s;
        --delay:${(Math.random() * 0.2).toFixed(2)}s;
      `;
        fwWrap.appendChild(dot);
        setTimeout(() => dot.remove(), 2500);
      }
    }
    setInterval(spawnFirework, 1200);
    setTimeout(spawnFirework, 100);



    /* ══════════════════════════════════════════
       SCROLL REVEAL
    ══════════════════════════════════════════ */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));