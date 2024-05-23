function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var userName = profile.getName();
    var userImage = profile.getImageUrl();
    
    // Hide login box at the bottom
    document.querySelector('.loginpg').style.display = 'none';
    
    // Hide sign-up div at the top
    document.querySelector('.sign').style.display = 'none';

    // Create a new div for user info
    var userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <img src="${userImage}" alt="User Image" style="width:40px;height:40px;border-radius:50%; margin-right: 10px;">
        <span>${userName}</span>
    `;
    userInfo.style.cssFloat = 'right';
    userInfo.style.display = 'flex';
    userInfo.style.alignItems = 'center';

    // Add user info to the header
    document.querySelector('nav').appendChild(userInfo);
}

function initOAuth() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '714183888722-4ru6jde2qev3he0ffrce010pg9534vn3.apps.googleusercontent.com'
        });
    });
}

initOAuth();
