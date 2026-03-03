const shareBtn = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');

shareBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    shareMenu.classList.toggle('hidden');
    shareMenu.classList.toggle('flex');
    
    shareBtn.classList.toggle('bg-dark-blue');
    shareBtn.classList.toggle('bg-light-blue');
    const shareIcon = shareBtn.querySelector('img');
    shareIcon.classList.toggle('brightness-0');
    shareIcon.classList.toggle('invert');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!shareMenu.contains(e.target) && !shareBtn.contains(e.target)) {
        if (shareMenu.classList.contains('flex')) {
            shareMenu.classList.add('hidden');
            shareMenu.classList.remove('flex');
            
            shareBtn.classList.remove('bg-dark-blue');
            shareBtn.classList.add('bg-light-blue');
            const shareIcon = shareBtn.querySelector('img');
            shareIcon.classList.remove('brightness-0', 'invert');
        }
    }
});
