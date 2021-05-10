(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
    
    //Setup
        "people-data":              { url: "$H/m/hdeeg/people-data.html", Table: "people-setup", form_module: "people-form"},
        "people-form":              { url: "$H/m/hdeeg/people-form.html", Table: "people-setup" },
        "sleepstudies_data":        { url: "$H/m/hdeeg/research_studies_data.html", Table: "sleepstudies-setup"},
        "research_studies":    { url: "$H/m/hdeeg/research_studies_data.html", Table: "researchstudies-setup", form_module:"research_studies_form" },
        "research_studies_form":    { url: "$H/m/hdeeg/research_studies_form.html", Table: "researchstudies-setup" },
        "equipment_data":           { url: "$H/m/hdeeg/equipment-data.html", Table: "equipment-setup", task_name: "demo-hdeeg-tracking" },

				"ia-research_studies": 				{ url: "$H/m/hdeeg/ia-research_studies_data.html", Table: "researchstudies-setup", form_module: "research_studies_form" },

    
    //Operations Admin (POs,Equipment Tracking,Research Studies, Staffing, No. of studies)
        "management":               { url: "$H/m/hdeeg/mgmt_panel.html",Table:"management-panel" },
        "purchase_data":            { url: "$H/m/hdeeg/purchase-data.html", Table: "purchase-order-setup", form_module: "purchase_form" },
        "purchase_form":            { url: "$H/m/hdeeg/purchase-form.html", Table: "purchase-order-setup" },
        "finanacereports_data":     { url: "$H/m/hdeeg/hdeeg-po-data.html", Table: "demo-hdeeg-tracking1", task_name: "demo-hdeeg-tracking" },
        "ticket_data":              { url: "$H/m/hdeeg/ticket-data.html", Table: "ticket-setup", form_module: "ticket_form" },
        "ticket_form":              { url: "$H/m/hdeeg/ticket-form.html", Table: "ticket-setup" },
        "training_data_r":          { url: "$H/m/hdeeg/training-data.html", Table: "training-setup", form_module: "training_form" },
        "training_form":            { url: "$H/m/hdeeg/training-form.html", Table: "training-setup" },
				"training_data_st": 				{ url: "$H/m/hdeeg/training-st-data.html", Table: "training-setup", form_module: "trainingst_form" },
				"trainingst_form": 					{ url: "$H/m/hdeeg/training-st-form.html", Table: "training-setup" },
				"staffing-data": 						{ url: "$H/m/hdeeg/staffing-data.html", Table: "staffing-setup", form_module: "staffing-form" },
				"staffing-form": 						{ url: "$H/m/hdeeg/staffing-form.html", Table: "staffing-setup" },


    //Research Study Admin
        "tracking_data":            { url: "$H/m/hdeeg/hdeeg-tracking-data.html", Table: "hdeeg-tracking", form_module: "tracking_form" },
        "tracking_form":            { url: "$H/m/hdeeg/hdeeg-tracking-form.html", Table: "hdeeg-tracking" },
        "sop-data":                 { url: "$H/m/hdeeg/sop-data.html", Table: "sop-setup", form_module:"sop-form"},
				"sop-form": 								{ url: "$H/m/hdeeg/sop-form.html", Table: "sop-setup" },
        "scoring-data":             { url: "$H/m/hdeeg/scoring-data.html", Table: "demo-hdeeg-scoring", form_module: "scoring-form" },
        "scoring-form":             { url: "$H/m/hdeeg/scoring-form.html", Table: "demo-hdeeg-scoring" },

        
        
        
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
