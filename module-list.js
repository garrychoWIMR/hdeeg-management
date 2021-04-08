(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
    //Setup
        "sleepstudies_data":        { url: "$H/m/hdeeg/research_studies_data.html", Table: "sleepstudies-setup"},
        "research_studies_data":    { url: "$H/m/hdeeg/research_studies_data.html", Table: "researchstudies-setup", form_module:"research_studies_form" },
        "research_studies_form":    { url: "$H/m/hdeeg/research_studies_form.html", Table: "researchstudies-setup" },
        "hdeeg_ticket_data":        { url: "$H/m/hdeeg/ticket-data.html", Table: "ticket-setup", form_module: "hdeeg_ticket_form" },
        "hdeeg_ticket_form":        { url: "$H/m/hdeeg/ticket-form.html", Table: "ticket-setup"},

//Operations Admin (POs,Equipment Tracking,Research Studies, Staffing, No. of studies)
        "hdeeg_management":         {url:"$H/m/hdeeg/mgmt_panel.html",Table:"management-panel" },
        "hdeeg_equipment_issues":   { url: "$H/m/hdeeg/hdeeg-po-data.html", Table: "demo-hdeeg-tracking1", task_name: "demo-hdeeg-tracking" },
        "hdeeg_po_data":            { url: "$H/m/hdeeg/hdeeg-po-data.html", Table: "demo-hdeeg-tracking1", task_name: "demo-hdeeg-tracking" },
        

//Research Study Admin
        "hdeeg_tracking_data": { url: "$H/m/hdeeg/hdeeg-tracking-data.html", Table: "hdeeg-tracking", form_module: "hdeeg_tracking_form" },
        "hdeeg_tracking_form": { url: "$H/m/hdeeg/hdeeg-tracking-form.html", Table: "hdeeg-tracking" },
        "hdeeg_sop_data":      { url: "$H/m/hdeeg/hdeeg-sop-data.html", Table: "demo-hdeeg-tracking1", task_name: "demo-hdeeg-tracking" },

        
        
        
    //  "calendar-sleepstudy-scoring-week": { url: "$H/m/calendar-sleepstudy-scoring-week.html", Table: "demo-wapp-booking", Table2: "demo-wapp-scoring", lookup: "demo-wapp-appointment" },
    //  "calendar-sleepstudy-week": { url: "$H/m/calendar-sleepstudy-week.html", Table: "demo-wapp-booking", Table2: "demo-wapp-roster", "booking": "booking-form", lookup: "demo-wapp-appointment" },
    //  "calendar-sleepstudy-scoring-week": { url: "$H/m/calendar-sleepstudy-scoring-week.html", Table: "demo-wapp-booking", Table2: "demo-wapp-scoring", lookup: "demo-wapp-appointment" },
    //  "hdeeg-tracking-data:":{url:"$H/m/hdeeg-tracking-data,table", Table: "demo-hdeeg-tracking", task_name:"demo-hdeeg-tracking" },

    
    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
