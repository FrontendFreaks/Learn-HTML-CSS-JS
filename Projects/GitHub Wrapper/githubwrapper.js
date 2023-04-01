console.log('github wrapper');

const userNameInput = document.getElementById('userName');
const showDetailsButton = document.getElementById('showDetails');
const profileInfoDiv = document.getElementById('profileInfo');
const reposInfoDiv = document.getElementById('reposInfo');

// using async and await
showDetailsButton.addEventListener('click', async () => {
    const userName = userNameInput.value;

    //request the data from server: fetch api
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    showProfile(data);
    showReposInfo(userName);
})

function showProfile(data) {
    // console.log(data);
    profileInfoDiv.innerHTML = `<div class="card">
        <div class="card-img">
            <img src=${data.avatar_url} alt=${data.name}>
        </div>
        <div class="card-body">
            <div class="card-title">${data.name}</div>
            <div class="card-subHeading">${data.login}</div>
            <div class="card-text">
                <p>${data.bio}</p>
                <p>${data.followers} followers ${data.following} following

                <button>
                        <a href=${data.html_url}>
                            Do checkout Profile
                        </a>
                </button>
            </div>
        </div>
    </div>`
}


async function showReposInfo(userName) {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`)
    const projects = await res.json();
    
    for (let i = 0; i < projects.length; i++) {
        reposInfoDiv.innerHTML += `<div class="card">
                <div class="card-body">
                    <div class="card-title">${projects[i].name}</div>
                    <div class="card-subHeading">${projects[i].language}</div>
                    <div class="card-text">
                        <button>
                            <a href=${projects[i].html_url}>
                                Do checkout Project
                            </a>
                        </button>
                    </div>
                </div>
            </div>`
    }
}




































// using then and catch


// function showReposInfo(userName){
//     fetch(`https://api.github.com/users/${userName}/repos`)
//         .then(res => res.json())
//         .then(projects => {
//             console.log(projects);
//             for(let i=0; i<projects.length; i++){
//                 reposInfoDiv.innerHTML += `<div class="card">
//                 <div class="card-body">
//                     <div class="card-title">${projects[i].name}</div>
//                     <div class="card-subHeading">${projects[i].language}</div>
//                     <div class="card-text">
//                         <button>
//                             <a href=${projects[i].html_url}>
//                                 Do checkout Project
//                             </a>
//                         </button>
//                     </div>
//                 </div>
//             </div>`

//             }
//         })
// }

// showDetailsButton.addEventListener('click', () => {
//     const userName = userNameInput.value;

//     //request the data from server: fetch api
//     fetch(`https://api.github.com/users/${userName}`)
//         .then((res) => res.json())
//         .then((data) => {
//             // console.log(data);
//             profileInfoDiv.innerHTML = `<div class="card">
//             <div class="card-img">
//                 <img src=${data.avatar_url} alt=${data.name}>
//             </div>
//             <div class="card-body">
//                 <div class="card-title">${data.name}</div>
//                 <div class="card-subHeading">${data.login}</div>
//                 <div class="card-text">
//                     <p>${data.bio}</p>
//                     <p>${data.followers} followers ${data.following} following

//                     <button>
//                             <a href=${data.html_url}>
//                                 Do checkout Profile
//                             </a>
//                     </button>
//                 </div>
//             </div>
//         </div>`


//             showReposInfo(userName);
//         })
// })


// Promises, resolve, reject, pending
// const p = new Promise((resolve, reject) => {
//     const x = 1 + 5;
//     if(x === 2){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// })

// // then will be executed when promise resolve, otherwise catch will be executed
// p.then((data) => console.log(data)).catch((err) => console.log(err))