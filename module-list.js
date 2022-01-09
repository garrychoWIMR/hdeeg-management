(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
    
    //Setup
	"people-data":              { url: "$H/m/hdeeg/people-data.html", Table: "people-setup", form_module: "people-form"},
	"people-form":              { url: "$H/m/hdeeg/people-form.html", Table: "people-setup" },
	"staffsum-form":              { url: "$H/m/hdeeg/staff-summary.html", Table: "staffsum-setup", form_module: "staffsum-form"},
	"sleepstudies_data":        { url: "$H/m/hdeeg/research_studies_data.html", Table: "sleepstudies-setup"},
	"research_studies":    { url: "$H/m/hdeeg/research_studies_data.html", Table: "researchstudies-setup", form_module:"research_studies_form"},
	"research_studies_form":    { url: "$H/m/hdeeg/research_studies_form.html", Table: "researchstudies-setup" },
	"equipment_data":           { url: "$H/m/hdeeg/equipment-data.html", Table: "equipment-setup", form_module:"equipment_form" },
	"equipment_form": 					{ url: "$H/m/hdeeg/equipment-form.html", Table: "equipment-setup" },
	"ia-people-data": 					{ url: "$H/m/hdeeg/ia-people-data.html", Table: "people-setup" },
	"ia-research_studies": 				{ url: "$H/m/hdeeg/ia-research_studies_data.html", Table: "researchstudies-setup", form_module: "research_studies_form" },

    
    //Operations Admin (POs,Equipment Tracking,Research Studies, Staffing, No. of studies)
	// "management":               { url: "$H/m/hdeeg/mgmt_panel.html",Table:"management-panel" },
	"purchase_data":            { url: "$H/m/hdeeg/purchase-data.html", Table: "purchase-order-setup", form_module: "purchase_form" },
	"purchase_form":            { url: "$H/m/hdeeg/purchase-form.html", Table: "purchase-order-setup" },
	"invoice_data":     		{ url: "$H/m/hdeeg/invoice-data.html", Table: "invoice-setup" , form_module: "invoice_form"},
	"invoice_form": 			{ url: "$H/m/hdeeg/invoice-form.html", Table: "invoice-setup"},
	"ticket_data":              { url: "$H/m/hdeeg/ticket-data.html", Table: "ticket-setup", form_module: "ticket_form" },
	"ticket_form":              { url: "$H/m/hdeeg/ticket-form.html", Table: "ticket-setup" },
	"training_data_r":          { url: "$H/m/hdeeg/training-data.html", Table: "training-setup", form_module: "training_form" },
	"training_form":            { url: "$H/m/hdeeg/training-form.html", Table: "training-setup" },
	"training_data_st":			{ url: "$H/m/hdeeg/training-st-data.html", Table: "training-setup", form_module: "trainingst_form" },
	"trainingst_form": 			{ url: "$H/m/hdeeg/training-st-form.html", Table: "training-setup" },
	//"staffing-data": 						{ url: "$H/m/hdeeg/staffing-data.html", Table: "staffing-setup", form_module: "staffing-form" },
	//"staffing-form": 						{ url: "$H/m/hdeeg/staffing-form.html", Table: "staffing-setup" },
	"troubleshoot_data": 		{ url: "$H/m/hdeeg/troubleshoot-data.html", Table: "ticket-setup"},
	"stock_data":      			{ url: "$H/m/hdeeg/inventory-data.html", Table: "stock-setup",form_module:"stock_form"},
	"stock_form": 				{ url: "$H/m/hdeeg/inventory-form.html", Table: "stock-setup"},
	"usage_data": 				{ url: "$H/m/hdeeg/usage-data.html", Table: "stock-setup", form_module: "usage_form" },
	"usage_form": 				{ url: "$H/m/hdeeg/usage-form.html", Table: "stock-setup" },
	"scoring-data": 			{ url: "$H/m/hdeeg/scoring-data.html", Table: "stock-setup", form_module: "scoring-form" },
	"scoring-form": 			{ url: "$H/m/hdeeg/scoring-form.html", Table: "stock-setup" },

//Research Study Admin
	"tracking_data":            { url: "$H/m/hdeeg/hdeeg-tracking-data.html", Table: "hdeeg-tracking", form_module: "tracking_form" },
	"tracking_form":            { url: "$H/m/hdeeg/hdeeg-tracking-form.html", Table: "hdeeg-tracking" },
	"sop-data":                 { url: "$H/m/hdeeg/sop-data.html", Table: "sop-setup", form_module:"sop-form"},
	"sop-form": 				{ url: "$H/m/hdeeg/sop-form.html", Table: "sop-setup" },

        
        
        

    
    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
