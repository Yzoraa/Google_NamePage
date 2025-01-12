document.addEventListener('DOMContentLoaded', () =>{
    const gridWrap = document.getElementById('grid');
    const gridDropBt = document.getElementById('dropBt');
    const imgWrapper = document.createElement('div'); // 드롭박스 감쌀 div
    imgWrapper.classList.add('imgWrapper'); // 스타일링을 위한 클래스 추가


    const data = [
        { id: 1, name: '계정', url: 'https://myaccount.google.com/?utm_source=OGB&utm_medium=app' },
        { id: 2, name: '검색', url: 'https://www.google.com/?authuser=0' },
        { id: 3, name: '지도', url: 'https://www.google.com/maps?authuser=0' },
        { id: 4, name: 'Youtube', url: 'https://www.youtube.com/?authuser=0' },
        { id: 5, name: 'Gemini', url: 'https://gemini.google.com/?utm_source=app_launcher&utm_medium=owned&utm_campaign=base_all' },
        { id: 6, name: '뉴스', url: 'https://news.google.com/home?hl=ko&gl=KR&ceid=KR:ko' },
        { id: 7, name: 'Gmail', url: 'https://mail.google.com/mail/u/0/' },
        { id: 8, name: 'Meet', url: 'https://meet.google.com/landing?hs=197&authuser=0&pli=1' },
        { id: 9, name: '채팅', url: 'https://mail.google.com/chat/u/0/#chat/home' },
        { id: 10, name: '주소록', url: 'https://contacts.google.com/' },
        { id: 11, name: '드라이브', url: 'https://drive.google.com/drive/u/0/home' },
        { id: 12, name: 'Calendar', url: '#' },
        { id: 13, name: 'Play', url: '#' },
        { id: 14, name: '번역', url: '#' },
        { id: 15, name: '사진', url: '#' },
        { id: 16, name: '내 광고센터', url: '#' },
        { id: 17, name: '쇼핑', url: '#' },
        { id: 18, name: '금융', url: '#' },
        { id: 19, name: 'Docs', url: '#' },
        { id: 20, name: 'Sheets', url: '#' },
        { id: 21, name: 'Slides', url: '#' },
        { id: 22, name: '도서', url: '#' },
        { id: 23, name: 'Blogger', url: '#' },
        { id: 24, name: 'Keep', url: '#' },
        { id: 25, name: '클래스룸', url: '#' },
        { id: 26, name: '어스', url: '#' },
        { id: 27, name: '저장됨', url: '#' },
        { id: 28, name: '아트 앤 컬처', url: '#' },
        { id: 29, name: 'Google Ads', url: '#' },
        { id: 30, name: 'Merchant Center', url: '#' },
        { id: 31, name: '여행', url: '#' },
        { id: 32, name: 'Google One', url: '#' }
    ];

    // 드롭박스 요소 생성
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gridItem';
        div.textContent = item.name;
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