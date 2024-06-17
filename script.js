document.getElementById('predict-button').addEventListener('click', () => {
    const frontImage = document.getElementById('front-image').files[0];
    const backImage = document.getElementById('back-image').files[0];

    if (!frontImage || !backImage) {
        alert('앞면과 뒷면 사진을 모두 업로드해주세요.');
        return;
    }

    document.getElementById('loading').style.display = 'flex';
    document.getElementById('results').innerHTML = '';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        displayResults();
    }, 6000);
});

function displayResults() {
    const resultsDiv = document.getElementById('results');
    
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('result-item');

    const name = document.createElement('p');
    name.textContent = `1. 타이레놀`;

    const img = document.createElement('img');
    img.src = 'img/타이레놀.jpg';
    img.alt = '타이레놀';

    const description = document.createElement('p');
    description.textContent = `타이레놀은 아세트아미노펜 성분의 해열진통제입니다. 두통, 치통, 관절통 등의 통증을 완화시키고, 감기로 인한 발열을 감소시켜줍니다.`;

    itemDiv.appendChild(name);
    itemDiv.appendChild(img);
    itemDiv.appendChild(description);
    resultsDiv.appendChild(itemDiv);
}
