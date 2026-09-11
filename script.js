let current=0;const pages=[...document.querySelectorAll('.page')],song=document.getElementById('song'),player=document.getElementById('musicPlayer'),musicBtn=document.getElementById('musicBtn');
function showPage(n){pages[current].classList.remove('active');current=n;pages[current].classList.add('active');window.scrollTo({top:0,behavior:'smooth'});if(current===6)makeConfetti()}
function nextPage(){if(current<pages.length-1)showPage(current+1)}
function startSurprise(){player.classList.add('show');song.play().then(()=>musicBtn.textContent='Ⅱ').catch(()=>musicBtn.textContent='▶');nextPage()}
function toggleMusic(){if(song.paused){song.play().then(()=>musicBtn.textContent='Ⅱ')}else{song.pause();musicBtn.textContent='▶'}}
function showLast(){showPage(6)}
function revealFinal(){document.getElementById('lastReveal').classList.add('hidden');document.getElementById('finalText').classList.remove('hidden');makeConfetti()}
function makeConfetti(){const box=document.getElementById('confetti');if(box.dataset.done)return;box.dataset.done='1';const colors=['#a55f4d','#8e7562','#c5a26e','#6e7c69','#d2a9a0'];for(let i=0;i<52;i++){const x=document.createElement('i');x.style.left=Math.random()*100+'%';x.style.top=(-Math.random()*30)+'%';x.style.animationDelay=Math.random()*1.2+'s';x.style.background=colors[i%colors.length];box.appendChild(x)}}
