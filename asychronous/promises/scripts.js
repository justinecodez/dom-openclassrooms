const result = document.getElementById('result');

let approval = 'Not approved!';

function getApproval() {
  setTimeout(() => {
    approval = 'Approved!';
  }, 500);
}

getApproval();
result.textContent = approval;


