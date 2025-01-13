document.addEventListener('DOMContentLoaded', () =>{
    const gridWrap = document.getElementById('grid');
    const gridDropBt = document.getElementById('dropBt');
    const imgWrapper = document.createElement('div'); // 드롭박스 감쌀 div
    imgWrapper.classList.add('imgWrapper'); // 스타일링을 위한 클래스 추가


    const data = [
        { id: 1, name: '계정', url: 'https://myaccount.google.com/?utm_source=OGB&utm_medium=app', img:'./imgs/icon.png'},
        { id: 2, name: '검색', url: 'https://www.google.com/?authuser=0', img:'./imgs/icon.png' },
        { id: 3, name: '지도', url: 'https://www.google.com/maps?authuser=0', img:'./imgs/icon.png' },
        { id: 4, name: 'Youtube', url: 'https://www.youtube.com/?authuser=0', img:'./imgs/icon.png' },
        { id: 5, name: 'Gemini', url: 'https://gemini.google.com/?utm_source=app_launcher&utm_medium=owned&utm_campaign=base_all', img:'./imgs/icon.png' },
        { id: 6, name: '뉴스', url: 'https://news.google.com/home?hl=ko&gl=KR&ceid=KR:ko', img:'./imgs/icon.png' },
        { id: 7, name: 'Gmail', url: 'https://mail.google.com/mail/u/0/', img:'./imgs/icon.png' },
        { id: 8, name: 'Meet', url: 'https://meet.google.com/landing?hs=197&authuser=0&pli=1', img:'./imgs/icon.png' },
        { id: 9, name: '채팅', url: 'https://mail.google.com/chat/u/0/#chat/home', img:'./imgs/icon.png' },
        { id: 10, name: '주소록', url: 'https://contacts.google.com/', img:'./imgs/icon.png' },
        { id: 11, name: '드라이브', url: 'https://drive.google.com/drive/u/0/home', img:'./imgs/icon.png' },
        { id: 12, name: 'Calendar', url: '#', img:'./imgs/icon.png' },
        { id: 13, name: 'Play', url: '#', img:'./imgs/icon.png' },
        { id: 14, name: '번역', url: '#', img:'./imgs/icon.png' },
        { id: 15, name: '사진', url: '#', img:'./imgs/icon.png' },
        { id: 16, name: '내 광고센터', url: '#', img:'./imgs/icon.png' },
        { id: 17, name: '쇼핑', url: '#', img:'./imgs/icon.png' },
        { id: 18, name: '금융', url: '#', img:'./imgs/icon.png' },
        { id: 19, name: 'Docs', url: '#', img:'./imgs/icon.png' },
        { id: 20, name: 'Sheets', url: '#', img:'./imgs/icon.png' },
        { id: 21, name: 'Slides', url: '#', img:'./imgs/icon.png' },
        { id: 22, name: '도서', url: '#', img:'./imgs/icon.png' },
        { id: 23, name: 'Blogger', url: '#', img:'./imgs/icon.png' },
        { id: 24, name: 'Keep', url: '#', img:'./imgs/icon.png' },
        { id: 25, name: '클래스룸', url: '#', img:'./imgs/icon.png' },
        { id: 26, name: '어스', url: '#', img:'./imgs/icon.png' },
        { id: 27, name: '저장됨', url: '#', img:'./imgs/icon.png' },
        { id: 28, name: '아트 앤 컬처', url: '#', img:'./imgs/icon.png' },
        { id: 29, name: 'Google Ads', url: '#', img:'./imgs/icon.png' },
        { id: 30, name: 'Merchant Center', url: '#', img:'./imgs/icon.png' },
        { id: 31, name: '여행', url: '#', img:'./imgs/icon.png' },
        { id: 32, name: 'Google One', url: '#', img:'./imgs/icon.png' }
    ];

    // 드롭박스 요소 생성
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gridItem';

        // 이미지 추가
        if (item.img) {
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;
            img.className = 'gridImage';
            div.appendChild(img);
        }

        // 텍스트 추가
        const text = document.createElement('span');
        text.textContent = item.name;
        div.appendChild(text);

        div.addEventListener('click', () => {
            if (item.url) {
                window.open(item.url, '_blank');
            }
        });
        imgWrapper.appendChild(div); // imgWrapper 안에 추가
    });

    gridWrap.appendChild(imgWrapper);

    // 버튼 생성 및 추가
    const button = document.createElement('button');
    button.textContent = '기타 Google 앱 및 제품';
    button.classList.add('plusBtn');
    gridWrap.appendChild(button);

    let isOpen = false;
    gridDropBt.addEventListener('click', () => {
        isOpen = !isOpen;
        gridWrap.style.display = isOpen ? 'grid' : 'none';
    });        
})