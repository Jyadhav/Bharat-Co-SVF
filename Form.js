const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzKRJb6Wy3KTAFNJ8SHgPtY_OR41cxLo3Hn_jG9-23dg1kj1RxVlhp_8HIL2uOwCBsBfw/exec";

document.getElementById("siteVisitForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        project: document.getElementById("project").value,
        visitDate: document.getElementById("visitDate").value,
        customer: document.getElementById("customer").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        occupation: document.getElementById("occupation").value,
        budget: document.getElementById("budget").value,
        configuration: document.getElementById("configuration").value,
        address: document.getElementById("address").value,
        remarks: document.getElementById("remarks").value
    };

    console.log(data);

    try {

        await fetch(WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
        });

        alert("Data Saved Successfully!");
        this.reset();

    } catch (error) {

        console.error(error);
        alert(error.message);

    }

});