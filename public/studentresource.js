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
    // To help increase the use of valid input to the faculty and dept fields
    $('#faculty').change(function() {
        if ($('#faculty').val() == 'Arts And Humanities'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Chinese Studies'> Chinese Studies </option>
                                <option value='Creative Arts / Visual Arts'> Creative Arts / Visual Arts </option>
                                <option value='Creative Arts / Theatre Arts'> Creative Arts / Theatre Arts </option>
                                <option value='Creative Arts / Music'> Creative Arts / Music </option>
                                <option value='English Language'> English Language </option>
                                <option value='English Literature'> English Literature </option>
                                <option value='French'> French </option>
                                <option value='History And Strategic Studies'> History And Strategic Studies </option>
                                <option value='Linguistics / Igbo'> Linguistics / Igbo </option>
                                <option value='Linguistics / Yoruba'> Linguistics / Yoruba </option>
                                <option value='Linguistics / Urhobo'> Linguistics / Urhobo </option>
                                <option value='Philosophy'> Philosophy </option>
                                <option value='Russian'> Russian </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Education'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Adult Education'> Adult Education </option>
                                <option value='Business Education'> Business Education </option>
                                <option value='Early Childhood Education'> Early Childhood Education </option>
                                <option value='Education And Biology'> Education And Biology </option>
                                <option value='Education And Business Studies'> Education And Business Studies </option>
                                <option value='Education And Chemistry'> Education And Chemistry </option>
                                <option value='Education And Christian Religious Studies'> Education And Christian Religious Studies </option>
                                <option value='Education And Economics'> Education And Economics </option>
                                <option value='Education And English Language'> Education And English Language </option>
                                <option value='Education And French'> Education And French </option>
                                <option value='Education And Geography'> Education And Geography </option>
                                <option value='Education And History'> Education And History </option>
                                <option value='Education And Igbo'> Education And Igbo </option>
                                <option value='Education And Islamic Studies'> Education And Islamic Studies </option>
                                <option value='Education And Integrated Science'> Education And Integrated Science </option>
                                <option value='Education And Mathematics'> Education And Mathematics </option>
                                <option value='Education And Physics'> Education And Physics </option>
                                <option value='Education and Religious Studies'> Education and Religious Studies </option>
                                <option value='Education and Science'> Education and Science </option>
                                <option value='Education And Yoruba'> Education And Yoruba </option>
                                <option value='Educational Administration'> Educational Administration </option>
                                <option value='Educational Foundations'> Educational Foundations </option>
                                <option value='Guidance & Counselling'> Guidance & Counselling </option>
                                <option value='Home Economics And Education'> Home Economics And Education </option>
                                <option value='Human Kinetics'> Human Kinetics </option>
                                <option value='Technology Education'> Technology Education </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Engineering / Environmental Sciences'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Building'> Building </option>
                                <option value='Chemical Engineering'> Chemical Engineering </option>
                                <option value='Civil Engineering'> Civil Engineering </option>
                                <option value='Computer Engineering'> Computer Engineering </option>
                                <option value='Construction Management'> Construction Management </option>
                                <option value='Electrical /Electronics Engineering'> Electrical /Electronics Engineering </option>
                                <option value='Estate Management'> Estate Management </option>
                                <option value='Environmental Design'> Environmental Design </option>
                                <option value='Environmental Management'> Environmental Management </option>
                                <option value='Mechanical Engineering'> Mechanical Engineering </option>
                                <option value='Metallurgical And Materials Engineering'> Metallurgical And Materials Engineering </option>
                                <option value='Petroleum And Gas Engineering'> Petroleum And Gas Engineering </option>
                                <option value='Quantity Surveying'> Quantity Surveying </option>
                                <option value='Surveying And Geoinformatics'> Surveying And Geoinformatics </option>
                                <option value='Systems Engineering'> Systems Engineering </option>
                                <option value='Urban And Regional Planning'> Urban And Regional Planning </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Law / Legal Studies'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Commercial And Industrial law'> Commercial And Industrial law </option>
                                <option value='Conflict Management'> Conflict Management </option>
                                <option value='Dispute Resolution'> Dispute Resolution </option>
                                <option value='Jurisprudence And International Law'> Jurisprudence And International Law </option>
                                <option value='Legal Studies'> Legal Studies </option>
                                <option value='Private And Property Law'> Private And Property Law </option>
                                <option value='Public Law'> Public Law </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Medical / Health Sciences / Pharmacy'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Anaesthesia'> Anaesthesia </option>
                                <option value='Anatomy'> Anatomy </option>
                                <option value='Biomedical Engineering'> Biomedical Engineering </option>
                                <option value='Biopharmacy'> Biopharmacy </option>
                                <option value='Child Dental Health'> Child Dental Health </option>
                                <option value='Clinical Pathology'> Clinical Pathology </option>
                                <option value='Clinical Pharmacy'> Clinical Pharmacy </option>
                                <option value='Dentistry And Dental Surgery'> Dentistry And Dental Surgery </option>
                                <option value='Haematology And Blood Transfusion'> Haematology And Blood Transfusion </option>
                                <option value='Medical Laboratory Science'> Medical Laboratory Science </option>
                                <option value='Medical Microbiology and Parasitology'> Medical Microbiology and Parasitology </option>
                                <option value='Medicine And Surgery'> Medicine And Surgery </option>
                                <option value='Nursing / Nursing Science'> Nursing / Nursing Science </option>
                                <option value='Obstetrics / Gynaecology'> Obstetrics / Gynaecology </option>
                                <option value='Ophthalmology'> Ophthalmology </option>
                                <option value='Oral And Maxillofacial Surgery'> Oral And Maxillofacial Surgery </option>
                                <option value='Pediatrics'> Pediatrics </option>
                                <option value='Pharmacology'> Pharmacology </option>
                                <option value='Pharmacy'> Pharmacy </option>
                                <option value='Pharmacognosy'> Pharmacognosy </option>
                                <option value='Pharmaceutics And Pharmaceutical Technology'> Pharmaceutics And Pharmaceutical Technology </option>
                                <option value='Pharmaceutical Chemistry'> Pharmaceutical Chemistry </option>
                                <option value='Pharmaceutical Microbiology'> Pharmaceutical Microbiology </option>
                                <option value='Physiology'> Physiology </option>
                                <option value='Physiotherapy'> Physiotherapy </option>
                                <option value='Preventive Dentistry'> Preventive Dentistry </option>
                                <option value='Psychiatry'> Psychiatry </option>
                                <option value='Radiography'> Radiography </option>
                                <option value='Radiation Biology / Radiotherapy'> Radiation Biology / Radiotherapy </option>
                                <option value='Restorative Dentistry'> Restorative Dentistry </option>
                                <option value='Oral Pathology'> Oral Pathology </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Sciences'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Biochemistry'> Biochemistry </option>
                                <option value='Botany'> Botany </option>
                                <option value='Cell Biology And Genetics'> Cell Biology And Genetics </option>
                                <option value='Chemistry'> Chemistry </option>
                                <option value='Computer Science'> Computer Science </option>
                                <option value='Fisheries'> Fisheries </option>
                                <option value='Geology'> Geology </option>
                                <option value='Geophysics'> Geophysics </option>
                                <option value='Marine Biology'> Marine Biology </option>
                                <option value='Mathematics'> Mathematics </option>
                                <option value='Microbiology'> Microbiology </option>
                                <option value='Physics'> Physics </option>
                                <option value='Statistics'> Statistics </option>
                                <option value='Zoology'> Zoology </option>
                            </select>`);
        }
        else if ($('#faculty').val() == 'Social Sciences'){
            $('#dept').html(`<select id="dept" name="dept" data-value=student.dept class="form-control">
                                <option value='Economics'> Economics </option>
                                <option value='Geography'> Geography </option>
                                <option value='Mass Communication'> Mass Communication </option>
                                <option value='Political Science'> Political Science </option>
                                <option value='Psychology'> Psychology </option>
                                <option value='Social Work'> Social Work </option>
                                <option value='Sociology'> Sociology </option>
                            </select>`);
        }        
    });
    //The following lines of code help hold the value of the 
    //select element so it doesn't go back to the default 
    //values when trying to edit
    $('#faculty').val($('#faculty').attr('data-value'));
    $('#dept').val($('#dept').attr('data-value'));
    $('#level').val($('#level').attr('data-value'));
    $('#grade').val($('#grade').attr('data-value'))
});


// document.querySelector('#faculty').value = 'Sciences';
// document.querySelector('#dept').value = 'Botany';


