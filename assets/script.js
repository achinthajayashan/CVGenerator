const cvForm = document.getElementById('cvForm');

cvForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('inputFullName').value;
    const address = document.getElementById('inputAddress').value;
    const telephone = document.getElementById('inputTel').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const gender = document.getElementById('inputGender').value;
    const dob = document.getElementById('inputBirthDay').value;
    const profilePic = document.getElementById('inputProfileImage').files[0];

    // Create CV content
    const cvContent1 = `
        <img src="${URL.createObjectURL(profilePic)}" alt="" srcset="" width="100px"  id="pImg">
        <h1 class="tHead">Address</h1>
        <h2 class="tData">${address}</h2>
        
        <h1 class="tHead">Email</h1>
        <h2 class="tData">${email}</h2>
        
        <h1 class="tHead">Telephone</h1>
        <h2 class="tData">${telephone}</h2>
        
        <h1 class="tHead">Date Of Birth</h1>
        <h2 class="tData">${dob}</h2>
        
        <h1 class="tHead">Gender</h1>
        <h2 class="tData">${gender}</h2>
        
        <!-- Include other CV sections here -->
    `;

    const cvContent2 = `
        <h1 id="NameLarge">${fullName}</h1>
        <!-- Include other CV sections here -->
    `;

    // Create a new window to display CV content
    const cvWindow = window.open('', '_blank');
    cvWindow.document.write(`
        <html>
        <head>
            <title>Generated CV</title>
            <link rel="stylesheet" href="normalize.css">
            <link rel="stylesheet" href="assets/styles.css">
        </head>
        <body class="newBody">
            
            <section class="cvPage">
                <div class="cv-container">
                     ${cvContent1}
                </div>
                
                <div class="cv-container2">
                    ${cvContent2}
                </div>
            </section>
            
        </body>
        </html>
    `);

    // Close the CV window after a short delay and allow the user to download the CV as a PDF
    setTimeout(() => {
        cvWindow.document.close();
        cvWindow.print();
    }, 1000);
});