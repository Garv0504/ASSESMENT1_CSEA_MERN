document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    const imageElement = document.getElementById('photo');
    const imageSrc = imageElement.files ? URL.createObjectURL(imageElement.files[0]) : "";
  
    console.log(name);
    const resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.innerHTML = `
      <div class="main">
        <h2>${name}</h2>
        <img src="${imageSrc}" alt="photo" class="profile-pic">  <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>GitHub: ${github}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
      </div>
    `;
  
    const style = document.createElement('style');
    style.innerHTML = `
        .main{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
      .resume-container {
        border: 1px solid black;
        padding: 20px;
      }
  
      .profile-pic {  width: 150px;
        border-radius: 50%;
      }
    `;
    document.head.appendChild(style);
  });
  
  const form = document.getElementById("form");
  const button = document.getElementsByClassName('button')[0];
  button.addEventListener("click", () => {
    form.style.display = "none";
  });