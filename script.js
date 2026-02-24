let interview =[];
let rejected =[];
let currentStatus = 'all';


let totalCount = document.getElementById('total');
let jobAvailable = document.getElementById('job-available');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allJobsCard = document.getElementById('all-jobs-card')
const mainContainer = document.querySelector('main')
const filteredSection = document.getElementById('filtered-section')

function calculateCount(){

    totalCount.innerText =  allJobsCard.children.length;
    jobAvailable.innerText =  allJobsCard.children.length;
    interviewCount.innerText =  interview.length;
    rejectedCount.innerText =  rejected.length;

}

calculateCount()

function toggleStyle(id){

    allFilterBtn.classList.add('text-[#64748b]', 'bg-[#ffffff]');
    interviewFilterBtn.classList.add('text-[#64748b]', 'bg-[#ffffff]');
    rejectedFilterBtn.classList.add('text-[#64748b]', 'bg-[#ffffff]');

    allFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3b82f6]', 'text-white');

    const selected = document.getElementById(id);
    currentStatus = id

    selected.classList.remove('text-[#64748b]', 'bg-[#ffffff]');
    selected.classList.add('bg-[#3b82f6]', 'text-white');


    if(id === 'interview-filter-btn'){
        allJobsCard.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview()
    }else if(id === 'all-filter-btn'){
        allJobsCard.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }else if(id === 'rejected-filter-btn'){
        allJobsCard.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderReject()
    }
}

mainContainer.addEventListener('click', function(event){

    const interviewBtn = event.target.closest('.interview-btn');
    const rejectedBtn = event.target.closest('.rejected-btn');
    const deleteBtn = event.target.closest('.btn-delete');

    if(interviewBtn){

        const card = interviewBtn.closest('.job-card');

        const companyName = card.querySelector('.company-name').innerText;
        const positionName = card.querySelector('.position').innerText;
        const locationTypeSalary = card.querySelector('.location-type-salary').innerText;
        const notes = card.querySelector('.notes').innerText;

        card.querySelector('.btn-status').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            positionName,
            locationTypeSalary,
            btnStatus: 'INTERVIEW',
            notes
        };

        const jobExist = interview.find(item => item.companyName === companyName);

        if(!jobExist){
            interview.push(cardInfo);
        }

        rejected = rejected.filter(item => item.companyName !== companyName);

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }

        calculateCount();
    }

    else if(rejectedBtn){

        const card = rejectedBtn.closest('.job-card');

        const companyName = card.querySelector('.company-name').innerText;
        const positionName = card.querySelector('.position').innerText;
        const locationTypeSalary = card.querySelector('.location-type-salary').innerText;
        const notes = card.querySelector('.notes').innerText;

        card.querySelector('.btn-status').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            positionName,
            locationTypeSalary,
            btnStatus: 'REJECTED',
            notes
        };

        const jobExist = rejected.find(item => item.companyName === companyName);

        if(!jobExist){
            rejected.push(cardInfo);
        }

        interview = interview.filter(item => item.companyName !== companyName);

        if(currentStatus === 'rejected-filter-btn'){
            renderReject();
        }

        calculateCount();
    }

    else if(deleteBtn){

        const card = deleteBtn.closest('.job-card');
        const companyName = card.querySelector('.company-name').innerText;

        card.remove();

        interview = interview.filter(item => item.companyName !== companyName);
        rejected = rejected.filter(item => item.companyName !== companyName);

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
        else if(currentStatus === 'rejected-filter-btn'){
            renderReject();
        }

        calculateCount();
    }

});

 function renderInterview(){
    filteredSection.innerText = '';

    for(let interView of interview){
        let div = document.createElement('div')
        div.className = 'job-card p-[24px] bg-[#ffffff]  border-1 border-[#f1f2f4] rounded-[8px]'
        div.innerHTML = ` 
                <div>
                    <div class="flex justify-between space-y-[20px]">
                        <div class="space-y-[8px]">
                            <h2 class="company-name font-[600] text-[18px] text-[#002c5c]">${interView.companyName}</h2>
                            <h4 class="position  text-[#64748b]">${interView.positionName}</h4>
                        </div>
                            <button class="btn-delete btn btn-circle  w-[32px] h-[32px]  bg-[#ffffff] hover:bg-slate-100"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
                <div class="space-y-[20px]">   
                    <p class="location-type-salary text-[14px] text-[#64748b]">${interView.locationTypeSalary}</p>
                        <div class="space-y-[8px]">
                            <p class="btn-status btn bg-[#eef4ff]">${interView.btnStatus}</p>
                            <p class="notes text-[14px] text-[#323b49]">${interView.notes}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn btn-outline btn-success interview-btn bg-[#ffffff] hover:bg-success hover:text-white">INTERVIEW</button> 
                            <button class="btn btn-outline btn-error rejected-btn bg-[#ffffff] hover:bg-error hover:text-white">REJECTED</button>
                        </div>
                </div>
        `
        filteredSection.appendChild(div);
    }
   }
 function renderReject(){
    filteredSection.innerText = '';

    for(let reject of rejected){
        let div = document.createElement('div')
        div.className = 'job-card p-[24px] bg-[#ffffff]  border-1 border-[#f1f2f4] rounded-[8px]'
        div.innerHTML = ` 
                <div>
                    <div class="flex justify-between space-y-[20px]">
                        <div class="space-y-[8px]">
                            <h2 class="company-name font-[600] text-[18px] text-[#002c5c]">${reject.companyName}</h2>
                            <h4 class="position  text-[#64748b]">${reject.positionName}</h4>
                        </div>
                            <button class="btn-delete btn btn-circle  w-[32px] h-[32px]  bg-[#ffffff] hover:bg-slate-100"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
                <div class="space-y-[20px]">   
                    <p class="location-type-salary text-[14px] text-[#64748b]">${reject.locationTypeSalary}</p>
                        <div class="space-y-[8px]">
                            <p class="btn-status btn bg-[#eef4ff]">${reject.btnStatus}</p>
                            <p class="notes text-[14px] text-[#323b49]">${reject.notes}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn btn-outline btn-success interview-btn bg-[#ffffff] hover:bg-success hover:text-white">INTERVIEW</button> 
                            <button class="btn btn-outline btn-error rejected-btn bg-[#ffffff] hover:bg-error hover:text-white">REJECTED</button>
                        </div>
                </div>
        `
        filteredSection.appendChild(div);
    }
   }