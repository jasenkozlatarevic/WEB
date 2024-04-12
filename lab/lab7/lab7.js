document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("tableBody");
    const searchInput = document.getElementById("searchInput");
    const modalContent = document.getElementById("modalContent");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
  
    let employees = [
      { name: "Prescott", lastName: "Bartlett", position: "Technical Author", office: "London", age:"27", startDate: "2011-05-07", salary:"$145,000" },
      { name: "Gavin", lastName: "Cortez", position: "Team Leader", office: "San Francisco", age:"22", startDate: "2008-10-26", salary:"$235,500" },
      { name: "Lael", lastName: "Greer", position: "Systems Administrator", office: "London", age:"21", startDate: "2009-02-27", salary:"$103,500" },
      { name: "Gloria", lastName: "Little", position: "Systems Administrator", office: "New York", age:"59", startDate: "2009-04-10", salary:"$237,500" },
      { name: "Tiger", lastName: "Nixon", position: "Support Lead", office: "Edinburgh", age:"61", startDate: "2011-04-25", salary:"$320,800" },
      { name: "Quinn", lastName: "Flynn", position: "Support Lead", office: "Edinburgh", age:"22", startDate: "2013-03-03", salary:"$342,000" },
      { name: "Sakura", lastName: "Yamamoto", position: "Support Enginer", office: "Tokyo", age:"37", startDate: "2009-08-19", salary:"$139,575" },
      { name: "Olivia", lastName: "Liang", position: "Support Enginer", office: "Singapore", age:"64", startDate: "2011-02-03", salary:"$234,500" },
      { name: "Finn", lastName: "Camacho", position: "Support Enginer", office: "San Francisco", age:"47", startDate: "2009-07-07", salary:"$87,500" },
      { name: "Zorita", lastName: "Serrano", position: "Software Engineer", office: "San Francisco", age:"56", startDate: "2012-06-01", salary:"$115,000" },
    ];
  
    let sortedField = null;
    let ascendingOrder = true;
  
    function populateTable(filteredData) {
      tableBody.innerHTML = "";
      const dataToUse = filteredData ? filteredData : employees;
      dataToUse.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${employee.name}</td>
          <td>${employee.lastName}</td>
          <td>${employee.position}</td>
          <td>${employee.office}</td>
          <td>${employee.age}</td>
          <td>${employee.startDate}</td>
          <td>${employee.salary}</td>
        `;
        tableBody.appendChild(row);
        row.addEventListener("click", () => showModal(employee));
      });
    }
  
    function sortEmployees(field) {
      if (sortedField === field) {
        ascendingOrder = !ascendingOrder;
      } else {
        sortedField = field;
        ascendingOrder = true;
      }
  
      employees.sort((a, b) => {
        const valA = a[field].toUpperCase();
        const valB = b[field].toUpperCase();
        if (valA < valB) return ascendingOrder ? -1 : 1;
        if (valA > valB) return ascendingOrder ? 1 : -1;
        return 0;
      });
  
      populateTable();
      updateSortIcons(field);
    }
  
    function updateSortIcons(field) {
      const sortIcons = document.querySelectorAll(".sort-icon");
      sortIcons.forEach(icon => icon.innerHTML = '&uarr;&darr;');
      const currentIcon = document.querySelector(`th[data-sort="${field}"] .sort-icon`);
      currentIcon.innerHTML = ascendingOrder ? '&uarr;' : '&darr;';
    }
  
    function showModal(employee) {
      modalContent.innerHTML = `
        <h2>${employee.name} ${employee.lastName}</h2>
        <p>ID: ${employee.id}</p>
        <p>Position: ${employee.position}</p>
        <p>Office: ${employee.office}</p>
        <p>Age: ${employee.age}</p>
        <p>Start Date: ${employee.startDate}</p>
        <p>Salary: ${employee.salary}</p>
      `;
      modal.style.display = "block";
    }
  
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target == modal) modal.style.display = "none"; });
  
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.trim().toLowerCase();
      const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchValue)
      );
      employees.length > 0 ? populateTable(filteredEmployees) : populateTable();
    });
  
    const headers = document.querySelectorAll("th[data-sort]");
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const field = header.getAttribute("data-sort");
        sortEmployees(field);
      });
    });
  
    populateTable();
  });
  