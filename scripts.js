document.addEventListener('DOMContentLoaded', function() {
    const classesContainer = document.getElementById('classes-container');
    fetch('https://raw.githubusercontent.com/metapercept/CodeExcercise/master/Excercise-1/data/class.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(classesData => {
            console.log('Fetched data:', classesData); // Debugging output
            classesData.forEach(course => {
                const card = document.createElement('div');
                card.className = 'col-md-4';

                card.innerHTML = `
                    <div class="card">
                        <img src="${course.ImageUrl}" class="card-img-top" alt="${course.Name}">
                        <div class="card-body">
                            <h5 class="card-title mt-3">${course.Name}</h5>
                            <p class="card-text">${course.ShortDesc}</p>
                            <a href="#" class="btn metapercept-btn">View</a>
                        </div>
                    </div>
                `;

                classesContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
