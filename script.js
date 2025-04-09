document.addEventListener("DOMContentLoaded", function () {
  // The Load profile data from localStorage
  loadProfileData();

  // This will edit profile button click
  const editProfileBtn = document.getElementById("edit-profile-btn");
  const editModal = document.getElementById("edit-modal");
  const closeModal = document.getElementById("close-modal");
  const editProfileForm = document.getElementById("edit-profile-form");

  editProfileBtn.addEventListener("click", function () {
    openEditModal();
  });

  closeModal.addEventListener("click", function () {
    closeEditModal();
  });

  // This is Submit edited profile
  editProfileForm.addEventListener("submit", function (e) {
    e.preventDefault();
    saveProfileData();
    closeEditModal();
  });

  function openEditModal() {
    // Populate the modal w/or current profile data
    document.getElementById("edit-name").value =
      localStorage.getItem("name") || "";
    document.getElementById("edit-email").value =
      localStorage.getItem("email") || "";
    document.getElementById("edit-number").value =
      localStorage.getItem("number") || "";
    document.getElementById("edit-bio").value =
      localStorage.getItem("bio") || "";
    document.getElementById("edit-address").value =
      localStorage.getItem("address") || "";
    document.getElementById("edit-manager").value =
      localStorage.getItem("manager") || "";
    document.getElementById("edit-department").value =
      localStorage.getItem("department") || "";
    document.getElementById("edit-started-date").value =
      localStorage.getItem("started-date") || "";

    editModal.style.display = "block";
  }

  function closeEditModal() {
    editModal.style.display = "none";
  }

  function saveProfileData() {
    // Save updated profile data to localStorage
    localStorage.setItem("name", document.getElementById("edit-name").value);
    localStorage.setItem("email", document.getElementById("edit-email").value);
    localStorage.setItem(
      "number",
      document.getElementById("edit-number").value
    );
    localStorage.setItem("bio", document.getElementById("edit-bio").value);
    localStorage.setItem(
      "address",
      document.getElementById("edit-address").value
    );
    localStorage.setItem(
      "manager",
      document.getElementById("edit-manager").value
    );
    localStorage.setItem(
      "department",
      document.getElementById("edit-department").value
    );
    localStorage.setItem(
      "started-date",
      document.getElementById("edit-started-date").value
    );

    // Update profile display with the saved data
    loadProfileData();
  }

  function loadProfileData() {
    // Load profile data from localStorage and display it
    document.getElementById("profile-name").textContent =
      localStorage.getItem("name") || "John Doe";
    document.getElementById("profile-email").textContent =
      localStorage.getItem("email") || "johndoe@example.com";
    document.getElementById("profile-number").textContent =
      localStorage.getItem("number") || "555-555-555";
    document.getElementById("profile-bio").textContent =
      localStorage.getItem("bio") || "Lorem ipsum dolor sit amet.";
    document.getElementById("profile-address").textContent =
      localStorage.getItem("address") || "123 Main St, City, Country";
    document.getElementById("profile-manager").textContent =
      localStorage.getItem("manager") || "Jane Smith";
    document.getElementById("profile-department").textContent =
      localStorage.getItem("department") || "Marketing";
    document.getElementById("profile-started-date").textContent =
      localStorage.getItem("started-date") || "01/01/2020";
  }
});
