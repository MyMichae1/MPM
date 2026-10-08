const rooms = [
  {
    id: "kamar-01",
    name: "Kamar Asrama Reguler",
    description: "Kamar asrama yang nyaman untuk tamu rombongan, peserta pelatihan, maupun pengunjung reguler. Dilengkapi dengan fasilitas dasar yang memadai dan sirkulasi udara yang baik.",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522771731470-366336336e3c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800"
    ],
    facilities: [
      "Tempat tidur single",
      "Kamar mandi luar",
      "Kipas angin",
      "Meja belajar",
      "Lemari pakaian"
    ],
    capacity: 2,
    price: null
  },
  {
    id: "kamar-02",
    name: "Kamar Keluarga",
    description: "Kamar luas yang cocok untuk keluarga yang sedang berkunjung. Memiliki kamar mandi dalam dan privasi lebih.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    ],
    facilities: [
      "Tempat tidur queen size",
      "Kamar mandi dalam",
      "AC",
      "Lemari pakaian"
    ],
    capacity: 4,
    price: null
  }
];

const WHATSAPP_ROOM_DESTINATION = "https://chat.whatsapp.com/DNWSUa8bAtk6dj4dKf4Lnc";

// State for sliders
const sliderState = {};

function renderRooms() {
  const container = document.getElementById('room-container');
  if (!container) return;
  
  container.innerHTML = rooms.map(r => {
    sliderState[r.id] = 0;
    
    return `
    <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/2 relative group">
        <!-- Slider Images -->
        <div class="relative w-full h-64 md:h-full overflow-hidden bg-gray-100" id="slider-${r.id}">
          ${r.images.map((img, i) => `
            <img src="${img}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}" data-index="${i}">
          `).join('')}
        </div>
        
        <!-- Arrows -->
        ${r.images.length > 1 ? `
          <button onclick="changeSlide('${r.id}', -1)" aria-label="Gambar sebelumnya" class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center z-20 transition-colors opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onclick="changeSlide('${r.id}', 1)" aria-label="Gambar selanjutnya" class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center z-20 transition-colors opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
          
          <!-- Dots -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            ${r.images.map((_, i) => `
              <button onclick="goToSlide('${r.id}', ${i})" aria-label="Ke gambar ${i+1}" id="dot-${r.id}-${i}" class="w-2.5 h-2.5 rounded-full transition-colors ${i === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}"></button>
            `).join('')}
          </div>
        ` : ''}
      </div>
      
      <div class="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-3">${r.name}</h2>
        <p class="text-gray-600 mb-6">${r.description}</p>
        
        <h4 class="font-bold text-gray-900 mb-2">Fasilitas:</h4>
        <ul class="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${r.facilities.map(f => `
            <li class="flex items-center text-gray-600 text-sm">
              <svg class="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              ${f}
            </li>
          `).join('')}
        </ul>
        
        <div class="mt-auto">
          <button onclick="openBooking('${r.id}')" class="btn btn-primary inline-flex items-center gap-2">
            Pesan Kamar
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
    `;
  }).join('');
  
  // Attach swipe events
  rooms.forEach(r => {
    if (r.images.length > 1) {
      setupSwipe(r.id);
    }
  });
}

window.changeSlide = function(id, dir) {
  const r = rooms.find(x => x.id === id);
  let idx = sliderState[id] + dir;
  if (idx < 0) idx = r.images.length - 1;
  if (idx >= r.images.length) idx = 0;
  goToSlide(id, idx);
};

window.goToSlide = function(id, idx) {
  const r = rooms.find(x => x.id === id);
  const container = document.getElementById(`slider-${id}`);
  if(!container) return;
  
  const imgs = container.querySelectorAll('img');
  imgs.forEach(img => {
    img.classList.remove('opacity-100', 'z-10');
    img.classList.add('opacity-0', 'z-0');
  });
  
  const target = container.querySelector(`img[data-index="${idx}"]`);
  if (target) {
    target.classList.remove('opacity-0', 'z-0');
    target.classList.add('opacity-100', 'z-10');
  }
  
  // Update dots
  r.images.forEach((_, i) => {
    const dot = document.getElementById(`dot-${id}-${i}`);
    if (dot) {
      if (i === idx) {
        dot.classList.replace('bg-white/50', 'bg-white');
        dot.classList.replace('hover:bg-white/80', 'bg-white');
      } else {
        dot.classList.replace('bg-white', 'bg-white/50');
        dot.classList.add('hover:bg-white/80');
      }
    }
  });
  
  sliderState[id] = idx;
};

function setupSwipe(id) {
  const container = document.getElementById(`slider-${id}`);
  if (!container) return;
  
  let touchstartX = 0;
  let touchendX = 0;
  
  container.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  container.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});
  
  function handleSwipe() {
    const threshold = 50;
    if (touchendX < touchstartX - threshold) {
      changeSlide(id, 1);
    }
    if (touchendX > touchstartX + threshold) {
      changeSlide(id, -1);
    }
  }
}

window.openBooking = function(id) {
  const r = rooms.find(x => x.id === id);
  if (!r) return;
  
  const modal = document.getElementById('bookingModal');
  const content = document.getElementById('bookingContent');
  
  document.getElementById('bookingRoomName').value = r.name;
  document.getElementById('bookingRoomNameDisplay').textContent = "Kamar: " + r.name;
  
  // Reset Form
  document.getElementById('bookingForm').reset();
  document.getElementById('dateError').classList.add('hidden');
  
  modal.classList.remove('hidden');
  void modal.offsetWidth;
  modal.classList.remove('opacity-0');
  content.classList.remove('scale-95');
};

function closeBooking() {
  const modal = document.getElementById('bookingModal');
  const content = document.getElementById('bookingContent');
  if(!modal || !content) return;
  
  modal.classList.add('opacity-0');
  content.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  renderRooms();
  
  const closeBtn = document.getElementById('closeBookingBtn');
  if(closeBtn) closeBtn.addEventListener('click', closeBooking);
  
  const modal = document.getElementById('bookingModal');
  if(modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBooking();
    });
  }
  
  const submitBtn = document.getElementById('submitBookingBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const form = document.getElementById('bookingForm');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      
      const checkin = document.getElementById('bookingCheckin').value;
      const checkout = document.getElementById('bookingCheckout').value;
      const dateError = document.getElementById('dateError');
      
      if (new Date(checkout) <= new Date(checkin)) {
        dateError.classList.remove('hidden');
        return;
      } else {
        dateError.classList.add('hidden');
      }
      
      const roomName = document.getElementById('bookingRoomName').value;
      const name = document.getElementById('bookingName').value;
      const wa = document.getElementById('bookingWa').value;
      const guests = document.getElementById('bookingGuests').value;
      const notes = document.getElementById('bookingNotes').value;
      
      let text = `Halo Admin MPM,%0A%0ASaya ingin melakukan pemesanan kamar.%0A%0A`;
      text += `Nama: ${name}%0A`;
      text += `Nomor WhatsApp: ${wa}%0A`;
      text += `Kamar: ${roomName}%0A`;
      text += `Check-in: ${checkin}%0A`;
      text += `Check-out: ${checkout}%0A`;
      text += `Jumlah tamu: ${guests}%0A`;
      if (notes) text += `Catatan: ${notes}%0A`;
      text += `%0AMohon informasi ketersediaan kamar dan proses selanjutnya.%0A%0ATerima kasih.`;
      
      alert('Pesan pemesanan telah di-copy ke clipboard. Lanjutkan bergabung ke grup WhatsApp untuk mem-paste pesan Anda kepada Admin.');
      navigator.clipboard.writeText(decodeURIComponent(text)).then(() => {
        window.open(WHATSAPP_ROOM_DESTINATION, '_blank');
      }).catch(err => {
        window.open(WHATSAPP_ROOM_DESTINATION, '_blank');
      });
      
      closeBooking();
    });
  }
  
  // Set min date to today for date inputs
  const today = new Date().toISOString().split('T')[0];
  const ci = document.getElementById('bookingCheckin');
  const co = document.getElementById('bookingCheckout');
  if (ci) ci.min = today;
  if (co) co.min = today;
});
