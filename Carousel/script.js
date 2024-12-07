imagelist = ['https://images.unsplash.com/photo-1732948937655-095f68551734?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1608085575984-d61d8335340e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1732470878984-f35c1a805e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1733353211335-b9b4834dd629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1732979888718-47a5c6e454d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D'
]

let currentIndex = 0;
let carouselImageContainer = document.querySelector('.carousel-img')

function displayImage() {
    carouselImageContainer.innerHTML = `<img src="${imagelist[currentIndex]}" alt="Image ${currentIndex + 1}">
    <h2>Image ${currentIndex+1}</h2>`
}

function prev_image() {
    currentIndex = (currentIndex - 1 + imagelist.length) % imagelist.length
    displayImage();
}
function next_image() {
    currentIndex = (currentIndex + 1) % imagelist.length
    displayImage();
}
displayImage();