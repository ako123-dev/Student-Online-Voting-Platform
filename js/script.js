console.log("Student Online Voting Platform loaded successfully.");
//==================
// LOGIN VALIDATION
//==================

const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(event) {
        //Prevent the form from actually submitting
        event.preventDefault();

        //Get input values
        const studentId = document.getElementById("studentId").value.trim();
        const password = document.getElementById("password").value.trim();

        //Error Elements
        const studentError= document.getElementById("studentIdError");
        const passwordError = document.getElementById("passwordError");
        const loginMessage = document.getElementById("loginMessage");

        //Clear previous message
        studentIdError.textContent = "";
        passwordError.textContent="";
        loginMessage.textContent = "";

        let valid = true;

        //======================
        //STUDENT ID VALIDATION
        //======================
        if(studentId ===""){
            studentIdError.textContent = "Student ID is required.";
            valid = false;
        }

        //======================
        //PASSWORD VALIDATION
        //=====================
        if(password === ""){
            passwordError.textContent = "Password is required.";
            valid = false;
        }

        //=============
        //IF VALID
        //============
        
        if (valid) {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Login successful!";
           
            // Temporary frontend navigation
            setTimeout(function() {
                window.location.href =
                    "student-dashboard.html";
            }, 1000);
        }
    });

}

// =========================
// SELECT CANDIDATE
// =========================

function selectCandidate(candidateName) {

    // Store candidate temporarily
    localStorage.setItem(
        "selectedCandidate",
        candidateName
    );

    // Go to voting page
    window.location.href = "vote.html";
}
// =========================
// DISPLAY SELECTED CANDIDATE
// =========================

const selectedCandidateElement =
    document.getElementById("selectedCandidate");

if (selectedCandidateElement) {

    const candidate =
        localStorage.getItem("selectedCandidate");


    if (candidate) {

        selectedCandidateElement.textContent =
            candidate;

    }

}
// =========================
// CONFIRM VOTE
// =========================

const confirmVoteButton =
    document.getElementById("confirmVoteButton");

if (confirmVoteButton) {

    confirmVoteButton.addEventListener(
        "click",
        function() {

            const candidate =
                localStorage.getItem("selectedCandidate");


            if (!candidate) {

                const voteMessage =
                    document.getElementById("voteMessage");

                voteMessage.style.color = "#d00000";

                voteMessage.textContent =
                    "No candidate has been selected.";

                return;

            }
            localStorage.setItem(
              "hasVoted",
                "true"
            );

            // Temporary frontend simulation

            window.location.href =
                "vote-confirmation.html";

        }
    );

}
// =========================
// CONFIRMATION PAGE
// =========================

const confirmedCandidate =
    document.getElementById("confirmedCandidate");

if (confirmedCandidate) {

    const candidate =
        localStorage.getItem("selectedCandidate");


    if (candidate) {

        confirmedCandidate.textContent =
            candidate;

    }

}
// =========================
// DASHBOARD VOTING STATUS
// =========================

const votingStatusTitle =
    document.getElementById("votingStatusTitle");

const votingStatusMessage =
    document.getElementById("votingStatusMessage");


if (votingStatusTitle && votingStatusMessage) {

    const hasVoted =
        localStorage.getItem("hasVoted");


    if (hasVoted === "true") {

        votingStatusTitle.textContent =
            "Vote Submitted";

        votingStatusMessage.textContent =
            "You have already voted in the current election.";

    }

}
// =========================
// CHECK VOTING STATUS
// =========================

const votePage =
    document.querySelector(".vote-page");

const hasVoted =
    localStorage.getItem("hasVoted");


if (votePage && hasVoted === "true") {

    votePage.innerHTML = `

        <section class="vote-container">

            <div class="success-icon">
                ✓
            </div>

            <div class="vote-heading">

                <h1>
                    You Have Already Voted
                </h1>

                <p>
                    You have already submitted your vote
                    for this election.
                </p>

            </div>

            <div class="confirmation-actions">

                <a
                    href="student-dashboard.html"
                    class="btn">

                    Return to Dashboard

                </a>

            </div>

        </section>

    `;

}

//====ADMIN LOGIN======
const adminloginForm = document.getElementById("adminLoginForm");
if(adminloginForm){
    adminloginForm.addEventListener(
        "submit", function(event){
            event.preventDefault();

            const username = document.getElementById("adminUsername").value.trim();
            const password = document.getElementById("adminPassword").value.trim();
            const usernameError = document.getElementById("adminUsernameError");
            const passwordError = document.getElementById("adminPasswordError");
            const message = document.getElementById("adminLoginMessage");
            
            //Clear previous messages
            usernameError.textContent = "";
            passwordError.textContent = "";
            message.textContent = "";

            let valid = true;
            
            //Validate username
            if(username === ""){
                usernameError.textContent = "Username is required.";
                valid = false;
            }

            //Validate password
            if(password === ""){
                passwordError.textContent = "Password is required.";
                valid = false;
            }

            //IF VALID
            if(valid){
                message.style.color = "green";
                message.textContent = "Login successful!";

                //Temporary frontend navigation
                setTimeout(function(){
                    window.location.href = "admin-dashboard.html";
                }, 1000);
            }

        }
    );
}

// ================================
// ELECTION FORM
// ================================

const showElectionForm = document.getElementById("showElectionForm");
const electionFormContainer = document.getElementById("electionFormContainer");
const closeElectionForm = document.getElementById("closeElectionForm");
const cancelElectionForm = document.getElementById("cancelElectionForm");
const createElectionForm = document.getElementById("createElectionForm");
const formMessage = document.getElementById("electionFormMessage");

// Helper to show/hide
function showForm() {
  electionFormContainer.style.display = "block";
  // If you use classes: electionFormContainer.classList.add('visible');
}

function hideForm() {
  electionFormContainer.style.display = "none";
  createElectionForm.reset();
  formMessage.textContent = "";
  // If using classes: electionFormContainer.classList.remove('visible');
}

// Show
if (showElectionForm) {
  showElectionForm.addEventListener("click", showForm);
}

// Close buttons
if (closeElectionForm) {
  closeElectionForm.addEventListener("click", hideForm);
}
if (cancelElectionForm) {
  cancelElectionForm.addEventListener("click", hideForm);
}

// Handle form submission
if (createElectionForm) {
  createElectionForm.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    // (Optional) basic validation
    const name = document.getElementById("electionName").value.trim();
    if (!name) {
      formMessage.textContent = "Election name is required.";
      formMessage.style.color = "red";
      return;
    }

    // Simulate successful creation
    formMessage.textContent = "Election created successfully!";
    formMessage.style.color = "green";

    // Optionally hide after success
    setTimeout(hideForm, 1500);
  });
}

// ========================================
// CREATE / EDIT ELECTION
// ========================================

const electionForm =
    document.getElementById("electionForm");

const electionTableBody =
    document.getElementById("electionTableBody");

const electionSubmitButton =
    document.getElementById("electionSubmitButton");

const cancelEditButton =
    document.getElementById("cancelEditButton");


let editingElection = null;


// ========================================
// SUBMIT ELECTION FORM
// ========================================

if (electionFormContainer) {

    electionFormContainer.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // Get form values

            const electionName =
                document
                    .getElementById("electionName")
                    .value
                    .trim();


            const startDate =
                document
                    .getElementById("startDate")
                    .value;


            const endDate =
                document
                    .getElementById("endDate")
                    .value;


            const description =
                document
                    .getElementById("electionDescription")
                    .value
                    .trim();


            // ========================================
            // VALIDATION
            // ========================================

            if (
                electionName === "" ||
                startDate === "" ||
                endDate === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            if (endDate < startDate) {

                alert(
                    "End date cannot be before start date."
                );

                return;
            }


            // ========================================
            // EDIT EXISTING ELECTION
            // ========================================

            if (editingElection) {

                const cells =
                    editingElection.querySelectorAll("td");


                cells[0].textContent =
                    electionName;


                cells[1].textContent =
                    startDate;


                cells[2].textContent =
                    endDate;


                // Finish editing

                editingElection = null;


                //electionForm.reset();


                electionFormContainer.style.display =
                    "none";


                electionSubmitButton.textContent =
                    "Create Election";


                cancelEditButton.style.display =
                    "none";


                alert(
                    "Election updated successfully!"
                );


                return;
            }


            // ========================================
            // CREATE NEW ELECTION
            // ========================================

            const newRow =
                document.createElement("tr");


            newRow.innerHTML = `

                <td>
                    ${electionName}
                </td>

                <td>
                    ${startDate}
                </td>

                <td>
                    ${endDate}
                </td>

                <td>

                    <span class="status-badge upcoming">
                        Upcoming
                    </span>

                </td>

                <td>

                    <button
                        type="button"
                        class="secondary-btn edit-election">

                        Edit

                    </button>


                    <button
                        type="button"
                        class="danger-btn close-election">

                        Close

                    </button>

                </td>

            `;


            electionTableBody.appendChild(newRow);


            createElectionForm.reset();


            electionFormContainer.style.display =
                "none";


            alert(
                "Election created successfully!"
            );

        });

}

// ========================================
// EDIT ELECTION BUTTON
// ========================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "edit-election"
            )
        ) {

            const row =
                event.target.closest("tr");


            const cells =
                row.querySelectorAll("td");


            // Save which row we are editing

            editingElection = row;


            // Put values into form

            document
                .getElementById("electionName")
                .value =
                cells[0].textContent.trim();


            document
                .getElementById("startDate")
                .value =
                cells[1].textContent.trim();


            document
                .getElementById("endDate")
                .value =
                cells[2].textContent.trim();


            // Open form

            electionFormContainer.style.display =
                "block";


            // Change button text

            electionSubmitButton.textContent =
                "Save Changes";


            // Show cancel button

            cancelEditButton.style.display =
                "inline-block";


            // Scroll to form

            electionFormContainer.scrollIntoView({
                behavior: "smooth"
            });

        }

    }
);

// ========================================
// CANCEL EDIT
// ========================================

if (cancelEditButton) {

    cancelEditButton.addEventListener(
        "click",
        function() {

            editingElection = null;


            createElectionForm.reset();


            electionSubmitButton.textContent =
                "Create Election";


            cancelEditButton.style.display =
                "none";


            electionFormContainer.style.display =
                "none";

        }
    );

}

// ========================================
// CLOSE ELECTION
// ========================================

document.addEventListener("click", function(event) {

    if (
        event.target.classList.contains("close-election")
    ) {

        const row =
            event.target.closest("tr");


        const electionName =
            row.querySelector("td").textContent.trim();


        // Ask administrator for confirmation

        const confirmed =
            confirm(
                `Are you sure you want to close "${electionName}"?`
            );


        if (!confirmed) {

            return;

        }


        // Find the status cell

        const statusCell =
            row.querySelectorAll("td")[3];


        // Change status

        statusCell.innerHTML = `

            <span class="status-badge closed">
                Closed
            </span>

        `;


        // Change the action button

        event.target.textContent =
            "Closed";


        // Disable the button

        event.target.disabled =
            true;


        // Change button appearance

        event.target.classList.add(
            "disabled-btn"
        );


        alert(
            "Election closed successfully!"
        );

    }

});



// =========================
// CANDIDATE FORM
// =========================

const showCandidateForm =
    document.getElementById("showCandidateForm");

const closeCandidateForm =
    document.getElementById("closeCandidateForm");

const cancelCandidateForm =
    document.getElementById("cancelCandidateForm");

const candidateFormContainer =
    document.getElementById("candidateFormContainer");


// Show candidate form

if (showCandidateForm) {

    showCandidateForm.addEventListener(
        "click",
        function() {

            candidateFormContainer.style.display =
                "block";

            showCandidateForm.style.display =
                "none";

        }
    );

}


// Close candidate form

if (closeCandidateForm) {

    closeCandidateForm.addEventListener(
        "click",
        function() {

            candidateFormContainer.style.display =
                "none";

            showCandidateForm.style.display =
                "inline-block";

        }
    );

}


// Cancel candidate form

if (cancelCandidateForm) {

    cancelCandidateForm.addEventListener(
        "click",
        function() {

            candidateFormContainer.style.display =
                "none";

            showCandidateForm.style.display =
                "inline-block";

        }
    );

}

// =========================
// CREATE CANDIDATE
// =========================

const createCandidateForm =
    document.getElementById("createCandidateForm");

if (createCandidateForm) {

    createCandidateForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const firstName =
                document.getElementById(
                    "candidateFirstName"
                ).value.trim();


            const lastName =
                document.getElementById(
                    "candidateLastName"
                ).value.trim();


            const studentId =
                document.getElementById(
                    "candidateStudentId"
                ).value.trim();


            const election =
                document.getElementById(
                    "candidateElection"
                ).value;


            const position =
                document.getElementById(
                    "candidatePosition"
                ).value;


            const firstNameError =
                document.getElementById(
                    "candidateFirstNameError"
                );


            const lastNameError =
                document.getElementById(
                    "candidateLastNameError"
                );


            const studentIdError =
                document.getElementById(
                    "candidateStudentIdError"
                );


            const electionError =
                document.getElementById(
                    "candidateElectionError"
                );


            const positionError =
                document.getElementById(
                    "candidatePositionError"
                );


            const message =
                document.getElementById(
                    "candidateFormMessage"
                );


            // Clear previous errors

            firstNameError.textContent = "";

            lastNameError.textContent = "";

            studentIdError.textContent = "";

            electionError.textContent = "";

            positionError.textContent = "";

            message.textContent = "";


            let valid = true;


            // First name

            if (firstName === "") {

                firstNameError.textContent =
                    "First name is required.";

                valid = false;

            }


            // Last name

            if (lastName === "") {

                lastNameError.textContent =
                    "Last name is required.";

                valid = false;

            }


            // Student ID

            if (studentId === "") {

                studentIdError.textContent =
                    "Student ID is required.";

                valid = false;

            }


            // Election

            if (election === "") {

                electionError.textContent =
                    "Please select an election.";

                valid = false;

            }


            // Position

            if (position === "") {

                positionError.textContent =
                    "Please select a position.";

                valid = false;

            }


            // Success

            if (valid) {

                message.style.color =
                    "green";

                message.textContent =
                    "Candidate added successfully.";

            }

        }
    );

}

// ========================================
// EDIT CANDIDATE
// ========================================

let editingCandidate = null;

const candidateSubmitButton =
    document.querySelector(
        "#createCandidateForm button[type='submit']"
    );



// ========================================
// ADD CANDIDATE
// ========================================

const candidateForm =
    document.getElementById("createCandidateForm");


if (candidateForm) {

    candidateForm.addEventListener(
        "submit",
        function(event) {

            // Prevent page refresh
            event.preventDefault();


            // ========================================
            // GET FORM VALUES
            // ========================================

            const firstName =
                document
                    .getElementById("candidateFirstName")
                    .value
                    .trim();


            const lastName =
                document
                    .getElementById("candidateLastName")
                    .value
                    .trim();


            const studentId =
                document
                    .getElementById("candidateStudentId")
                    .value
                    .trim();


            const election =
                document
                    .getElementById("candidateElection")
                    .value;


            const position =
                document
                    .getElementById("candidatePosition")
                    .value;


            const programme =
                document
                    .getElementById("candidateProgramme")
                    .value
                    .trim();


            const year =
                document
                    .getElementById("candidateYear")
                    .value;


            const manifesto =
                document
                    .getElementById("candidateManifesto")
                    .value
                    .trim();


            // ========================================
            // VALIDATION
            // ========================================

            if (
                firstName === "" ||
                lastName === "" ||
                studentId === "" ||
                election === "" ||
                position === "" ||
                programme === "" ||
                year === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            // ========================================
            // CREATE INITIALS
            // ========================================

            const initials =
                firstName.charAt(0).toUpperCase() +
                lastName.charAt(0).toUpperCase();


            // ========================================
            // GET POSITION NAME
            // ========================================

            const positionSelect =
                document.getElementById(
                    "candidatePosition"
                );


            const positionName =
                positionSelect.options[
                    positionSelect.selectedIndex
                ].text;


            // ========================================
            // GET YEAR NAME
            // ========================================

            const yearSelect =
                document.getElementById(
                    "candidateYear"
                );


            const yearName =
                yearSelect.options[
                    yearSelect.selectedIndex
                ].text;


            // ========================================
            // EDIT EXISTING CANDIDATE
            // ========================================

            if (editingCandidate) {

                const avatar =
                    editingCandidate.querySelector(
                        ".candidate-admin-avatar"
                    );

                const info =
                    editingCandidate.querySelector(
                        ".candidate-admin-info"
                    );


                // Update initials

                avatar.textContent =
                    initials;


                // Update name

                info.querySelector("h3").textContent =
                    `${firstName} ${lastName}`;


                // Update student ID

                info.querySelectorAll("p")[0].textContent =
                    `Student ID: ${studentId}`;


                // Update programme and year

                info.querySelectorAll("p")[1].textContent =
                    `${programme} — ${yearName}`;


                // Update position

                info.querySelector("span").textContent =
                    positionName;


                // Finish editing

                editingCandidate = null;


                candidateForm.reset();


                candidateFormContainer.style.display =
                    "none";


                candidateSubmitButton.textContent =
                    "Add Candidate";


                alert(
                    "Candidate updated successfully!"
                );


                return;
            }
        })

        // ========================================
        // CREATE NEW CANDIDATE
        // ========================================

        const candidateCard =
            document.createElement("div");


        candidateCard.className =
            "admin-candidate-card";


        candidateCard.innerHTML = `

            <div class="candidate-admin-avatar">
                ${initials}
            </div>


            <div class="candidate-admin-info">

                <h3>
                    ${firstName} ${lastName}
                </h3>


                <p>
                    Student ID: ${studentId}
                </p>


                <p>
                    ${programme} — ${yearName}
                </p>


                <span>
                    ${positionName}
                </span>

            </div>


            <div class="candidate-admin-actions">

                <button
                    type="button"
                    class="secondary-btn edit-candidate">

                    Edit

                </button>


                <button
                    type="button"
                    class="danger-btn remove-candidate">

                    Remove

                </button>

            </div>

        `;


        // Add candidate to page

        const candidateSection =
            document.querySelector(
                ".admin-section:last-of-type"
            );


        candidateSection.appendChild(
            candidateCard
        );


        // Update candidate count

        const candidateCount =
            document.querySelector(
                ".section-title span"
            );


        if (candidateCount) {

            const currentCount =
                document.querySelectorAll(
                    ".admin-candidate-card"
                ).length;


            candidateCount.textContent =
                `${currentCount} Candidates`;

            }   
        
        // Reset form

        candidateForm.reset();


        // Hide form

        candidateFormContainer.style.display =
                "none";

            alert(
                "Candidate added successfully!"
            );
   
}


// ========================================
// EDIT CANDIDATE BUTTON
// ========================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "edit-candidate"
            )
        ) {

            const card =
                event.target.closest(
                    ".admin-candidate-card"
                );


            const info =
                card.querySelector(
                    ".candidate-admin-info"
                );


            const name =
                info.querySelector("h3")
                    .textContent
                    .trim();


            const nameParts =
                name.split(" ");


            const firstName =
                nameParts.shift();


            const lastName =
                nameParts.join(" ");


            const studentId =
                info.querySelectorAll("p")[0]
                    .textContent
                    .replace(
                        "Student ID:",
                        ""
                    )
                    .trim();


            const programmeYear =
                info.querySelectorAll("p")[1]
                    .textContent
                    .trim();


            const parts =
                programmeYear.split(" — ");


            const programme =
                parts[0];


            const yearName =
                parts[1];


            // Save the card being edited

            editingCandidate = card;


            // Load information into form

            document
                .getElementById(
                    "candidateFirstName"
                )
                .value =
                firstName;


            document
                .getElementById(
                    "candidateLastName"
                )
                .value =
                lastName;


            document
                .getElementById(
                    "candidateStudentId"
                )
                .value =
                studentId;


            document
                .getElementById(
                    "candidateProgramme"
                )
                .value =
                programme;


            // Find year option

            const yearSelect =
                document.getElementById(
                    "candidateYear"
                );


            for (
                let i = 0;
                i < yearSelect.options.length;
                i++
            ) {

                if (
                    yearSelect.options[i].text ===
                    yearName
                ) {

                    yearSelect.selectedIndex =
                        i;

                    break;

                }

            }


            // Find position

            const positionName =
                info.querySelector(
                    "span"
                ).textContent.trim();


            const positionSelect =
                document.getElementById(
                    "candidatePosition"
                );


            for (
                let i = 0;
                i < positionSelect.options.length;
                i++
            ) {

                if (
                    positionSelect.options[i].text ===
                    positionName
                ) {

                    positionSelect.selectedIndex =
                        i;

                    break;

                }

            }


            // Open form

            candidateFormContainer.style.display =
                "block";


            // Change button text

            candidateSubmitButton.textContent =
                "Save Changes";


            // Scroll to form

            candidateFormContainer.scrollIntoView({
                behavior: "smooth"
            });

        }

    }
);

// =========================
// POSITION FORM
// =========================

const showPositionForm =
    document.getElementById("showPositionForm");

const closePositionForm =
    document.getElementById("closePositionForm");

const cancelPositionForm =
    document.getElementById("cancelPositionForm");

const positionFormContainer =
    document.getElementById("positionFormContainer");


// Show form

if (showPositionForm) {

    showPositionForm.addEventListener(
        "click",
        function() {

            positionFormContainer.style.display =
                "block";

            showPositionForm.style.display =
                "none";

        }
    );

}


// Close form

if (closePositionForm) {

    closePositionForm.addEventListener(
        "click",
        function() {

            positionFormContainer.style.display =
                "none";

            showPositionForm.style.display =
                "inline-block";

        }
    );

}


// Cancel form

if (cancelPositionForm) {

    cancelPositionForm.addEventListener(
        "click",
        function() {

            positionFormContainer.style.display =
                "none";

            showPositionForm.style.display =
                "inline-block";

        }
    );

}
// =========================
// CREATE POSITION
// =========================

const createPositionForm =
    document.getElementById("createPositionForm");


if (createPositionForm) {

    createPositionForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const positionName =
                document.getElementById(
                    "positionName"
                ).value.trim();


            const maximumCandidates =
                document.getElementById(
                    "maximumCandidates"
                ).value;


            const positionNameError =
                document.getElementById(
                    "positionNameError"
                );


            const maximumCandidatesError =
                document.getElementById(
                    "maximumCandidatesError"
                );


            const message =
                document.getElementById(
                    "positionFormMessage"
                );


            // Clear errors

            positionNameError.textContent = "";

            maximumCandidatesError.textContent = "";

            message.textContent = "";


            let valid = true;


            // Position name

            if (positionName === "") {

                positionNameError.textContent =
                    "Position name is required.";

                valid = false;

            }


            // Maximum candidates

            if (maximumCandidates === "") {

                maximumCandidatesError.textContent =
                    "Please enter the maximum number of candidates.";

                valid = false;

            }
            else if (
                Number(maximumCandidates) < 1
            ) {

                maximumCandidatesError.textContent =
                    "The number must be at least 1.";

                valid = false;

            }


            // Success

            if (valid) {

                message.style.color =
                    "green";

                message.textContent =
                    "Position added successfully.";

            }

        }
    );

}

// =========================
// STUDENT SEARCH
// =========================

const studentSearch =
    document.getElementById("studentSearch");

const studentTableBody =
    document.getElementById("studentTableBody");

const studentCount =
    document.getElementById("studentCount");


if (studentSearch) {

    studentSearch.addEventListener(
        "input",
        filterStudents
    );

}


function filterStudents() {

    const searchText =
        studentSearch.value
            .toLowerCase()
            .trim();


    const statusFilter =
        document.getElementById(
            "studentStatusFilter"
        ).value;


    const votingFilter =
        document.getElementById(
            "votingStatusFilter"
        ).value;


    const rows =
        studentTableBody.querySelectorAll("tr");


    let visibleStudents = 0;


    rows.forEach(function(row) {

        const rowText =
            row.textContent.toLowerCase();


        const studentStatus =
            row.dataset.status;


        const votingStatus =
            row.dataset.voting;


        const matchesSearch =
            rowText.includes(searchText);


        const matchesStatus =
            statusFilter === "all" ||
            studentStatus === statusFilter;


        const matchesVoting =
            votingFilter === "all" ||
            votingStatus === votingFilter;


        if (
            matchesSearch &&
            matchesStatus &&
            matchesVoting
        ) {

            row.style.display = "";

            visibleStudents++;

        }
        else {

            row.style.display = "none";

        }

    });


    studentCount.textContent =
        "Showing " +
        visibleStudents +
        " students";

}

// =========================
// STUDENT FILTERS
// =========================

const studentStatusFilter =
    document.getElementById(
        "studentStatusFilter"
    );


const votingStatusFilter =
    document.getElementById(
        "votingStatusFilter"
    );


if (studentStatusFilter) {

    studentStatusFilter.addEventListener(
        "change",
        filterStudents
    );

}


if (votingStatusFilter) {

    votingStatusFilter.addEventListener(
        "change",
        filterStudents
    );

}