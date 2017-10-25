$(document).ready(function() {

    //Edit Student Button Clicked
    $('#edit-btn').on('click', function(e) {
        var studentId = e.currentTarget.getAttribute("data-id");
        $.ajax({
            type: 'GET',
            url: '/studentview/edit/' + studentId,
            success: function(data) {
                window.location.href = '/studentview/edit/' + studentId;
            }
        });
    });

    //Add Student Button Clicked
    $('#add-student').on('click', function() {
        $.ajax({
            type: 'GET',
            url: '/student/add',
            success: function(data) {
                window.location.href = '/student/add';
            }
        });
    });

    //Delete Student Button Clicked
    $('#delete-btn').on('click', function(e) {
        
        $('#exampleModal').on('show.bs.modal', function (e) {
            var studentId = e.currentTarget.getAttribute("data-id");
            $('button#delete-btn-home').on('click', function() {
                
                $.ajax({
                    type: 'DELETE',
                    url: '/studentview/' + studentId,
                    success: function(data){
                    //do something with the data via front-end framework
                    window.location.href = '/';
                }
                });
            });
        });
    });

    // Deleting from HomePage
   $('#exampleModal').on('show.bs.modal', function (e) {
      var selectedStudentId = e.relatedTarget.getAttribute("data-id");
      $('button#delete-btn-home').on('click', function() {
          
          $.ajax({
            type: 'DELETE',
            url: '/studentview/' + selectedStudentId,
            success: function(data){
            //do something with the data via front-end framework
            window.location.href = '/';
          }
        });
      });
    });

    $('#back-btn').on('click', function() {
        $.ajax({
            success: function(responce) {
                window.location.href = '/';            
            }
        });
    });

    $('#faculty').change(function() {
        if ($('#faculty').val() == 'Arts And Humanities'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Chinese Studies </option>
                                <option> Creative Arts / Visual Arts </option>
                                <option> Creative Arts / Theatre Arts </option>
                                <option> Creative Arts / Music </option>
                                <option> English Language </option>
                                <option> English Literature </option>
                                <option> French </option>
                                <option> History And Strategic Studies </option>
                                <option> Linguistics / Igbo </option>
                                <option> Linguistics / Yoruba </option>
                                <option> Linguistics / Urhobo </option>
                                <option> Philosophy </option>
                                <option> Russian </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Education'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Adult Education </option>
                                <option> Business Education </option>
                                <option> Early Childhood Education </option>
                                <option> Education And Biology </option>
                                <option> Education And Business Studies </option>
                                <option> Education And Chemistry </option>
                                <option> Education And Christian Religious Studies </option>
                                <option> Education And Economics </option>
                                <option> Education And English Language </option>
                                <option> Education And French </option>
                                <option> Education And Geography </option>
                                <option> Education And History </option>
                                <option> Education And Igbo </option>
                                <option> Education And Islamic Studies </option>
                                <option> Education And Integrated Science </option>
                                <option> Education And Mathematics </option>
                                <option> Education And Physics </option>
                                <option> Education and Religious Studies </option>
                                <option> Education and Science </option>
                                <option> Education And Yoruba </option>
                                <option> Educational Administration </option>
                                <option> Educational Foundations </option>
                                <option> Guidance & Counselling </option>
                                <option> Home Economics And Education </option>
                                <option> Human Kinetics </option>
                                <option> Technology Education </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Engineering / Environmental Sciences'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Building </option>
                                <option> Chemical Engineering </option>
                                <option> Civil Engineering </option>
                                <option> Computer Engineering </option>
                                <option> Construction Management </option>
                                <option> Electrical /Electronics Engineering </option>
                                <option> Estate Management </option>
                                <option> Environmental Design </option>
                                <option> Environmental Management </option>
                                <option> Mechanical Engineering </option>
                                <option> Metallurgical And Materials Engineering </option>
                                <option> Petroleum And Gas Engineering </option>
                                <option> Quantity Surveying </option>
                                <option> Surveying And Geoinformatics </option>
                                <option> Systems Engineering </option>
                                <option> Urban And Regional Planning </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Law / Legal Studies'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Commercial And Industrial law </option>
                                <option> Conflict Management </option>
                                <option> Dispute Resolution </option>
                                <option> Jurisprudence And International Law </option>
                                <option> Legal Studies </option>
                                <option> Private And Property Law </option>
                                <option> Public Law </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Medical / Health Sciences / Pharmacy'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Anaesthesia </option>
                                <option> Anatomy </option>
                                <option> Biomedical Engineering </option>
                                <option> Biopharmacy </option>
                                <option> Child Dental Health </option>
                                <option> Clinical Pathology </option>
                                <option> Clinical Pharmacy </option>
                                <option> Dentistry And Dental Surgery </option>
                                <option> Haematology And Blood Transfusion </option>
                                <option> Medical Laboratory Science </option>
                                <option> Medical Microbiology and Parasitology </option>
                                <option> Medicine And Surgery </option>
                                <option> Nursing / Nursing Science </option>
                                <option> Obstetrics / Gynaecology </option>
                                <option> Ophthalmology </option>
                                <option> Oral And Maxillofacial Surgery </option>
                                <option> Pediatrics </option>
                                <option> Pharmacology </option>
                                <option> Pharmacy </option>
                                <option> Pharmacognosy </option>
                                <option> Pharmaceutics And Pharmaceutical Technology </option>
                                <option> Pharmaceutical Chemistry </option>
                                <option> Pharmaceutical Microbiology </option>
                                <option> Physiology </option>
                                <option> Physiotherapy </option>
                                <option> Preventive Dentistry </option>
                                <option> Psychiatry </option>
                                <option> Radiography </option>
                                <option> Radiation Biology / Radiotherapy </option>
                                <option> Restorative Dentistry </option>
                                <option> Oral Pathology </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Sciences'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Biochemistry </option>
                                <option> Botany </option>
                                <option> Cell Biology And Genetics </option>
                                <option> Chemistry </option>
                                <option> Computer Science </option>
                                <option> Fisheries </option>
                                <option> Geology </option>
                                <option> Geophysics </option>
                                <option> Marine Biology </option>
                                <option> Mathematics </option>
                                <option> Microbiology </option>
                                <option> Physics </option>
                                <option> Statistics </option>
                                <option> Zoology </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Social Sciences'){
            $('#dept').html(`<select id="dept" name="dept" class="form-control">
                                <option> Economics </option>
                                <option> Geography </option>
                                <option> Mass Communication </option>
                                <option> Political Science </option>
                                <option> Psychology </option>
                                <option> Social Work </option>
                                <option> Sociology </option>
                            </select>`);
        }
    });
});
