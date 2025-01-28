console.log("Started 2");

let files = null;    
google.script.run.withSuccessHandler( function(returnedFilesArray) { renderFileList(returnedFilesArray); } ).getFolderFiles();

function renderFileList(files) {
 console.log(files);
 const feedbacksContainer = document.getElementById("feedbacksContainer");
 feedbacksContainer.innerHTML = "";

 files.forEach((fileObject) => {
   const fileItem = `
       <div class="communicationLine">
           <a class="communicationLink" title="${fileObject.name}" target="_blank" href="https://drive.google.com/file/d/${fileObject.id}/view">${fileObject.name}</a>
       </div>
   `;
   feedbacksContainer.insertAdjacentHTML("beforeend", fileItem);
 });
}


function renderFileList_OLD(files) {
 const feedbacksContainer = document.getElementById("feedbacksContainer");
 feedbacksContainer.innerHTML = "";

 files.forEach((fileObject) => {
   const fileItem = `
       <div class="rounded-lg shadow-md shadow-red-200 p-6">
         <div class="mb-2 flex items-center justify-between">
          <p class="flex items-center">${fileObject.getUrl()}</p>
           <p class="text-gray-700 text-xs">${formatDate(
             fileObject.createdAt
           )}</p>
         </div>
         <p class="mb-2 flex items-center justify-between">
           ${fileObject.name}
         </p>
       </div>
     </div>
   `;
   feedbacksContainer.insertAdjacentHTML("beforeend", fileItem);
 });
}


function formatDate(timestamp) {
 const date = new Date(timestamp);
 const options = { day: "numeric", month: "short", year: "numeric" };
 return date.toLocaleDateString("en-US", options);
}