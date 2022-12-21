$(document).ready(function(){
    //Regresar al menu donde esta la imagen y presentacion de la pagina we
    $("#menuInicio").click(function(event){
        $("#divTrabajoClase").hide(1000);   
        $("#divCasoEst").hide(1000);        
        $("#divCuadro").hide(1000);  
        $("#divCasoE").hide(1000);   
        $("#divGlosario").hide(1000);         
        $("#divIndividual").hide(1000);   
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);        
        $("#divInicio").show(1000);   
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);  
    });

    //Accion al dar clic en el menu trabajos en clase
    $("#menuPrimerCorte").click(function(event){
        $("#divInicio").hide("slow");
        $("#divCasoEst").hide(1000);        
        $("#divCuadro").hide(1000);  
        $("#divCasoE").hide(1000);   
        $("#divGlosario").hide(1000);     
        $("#divTrabajoClase").show(1000);  
        $("#divIndividual").hide(1000);  
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);      
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);

    });

    //Accion al dar clic en el menu caso de estudio 1
    $("#menuCasoEstudio").click(function(event){
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);        
        $("#divCuadro").hide(1000);  
        $("#divCasoE").hide(1000);   
        $("#divGlosario").hide(1000);  
        $("#divIndividual").hide(1000);         
        $("#divCasoEst").show(1000);  
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);       
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
        
    });

     //Accion al dar clic en el menu de cuadro comparativo
     $("#menuCuadro").click(function(event){
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);        
        $("#divCasoEst").hide(1000);  
        $("#divCasoE").hide(1000);   
        $("#divGlosario").hide(1000);
        $("#divIndividual").hide(1000);           
        $("#divCuadro").show(1000);     
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);   
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
        
    });

    //Accion al dar clic en el menu segundo caso de estudio 2
    $("#menuCasoEst").click(function(event){
      $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divGlosario").hide(1000);    
        $("#divIndividual").hide(1000);       
        $("#divCasoE").show(1000);   
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);        
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });

    //Accion al dar clic en el menu golsario
    $("#menuGlosario").click(function(event){
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divIndividual").hide(1000);       
        $("#divGlosario").show(1000);    
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);    
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

      //Accion al dar clic en el menu trabajos indivuales
      $("#menuIndividual").click(function(event){
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").show(1000); 
        //ocultar los menus del segundo corte 
        $("#divApuntesSC").hide(1000);        
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000);       
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Segundo Corte
    //Accion al dar clic en el menu apuntes
    $("#menuApuntesSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").show(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 
      
    //Accion al dar clic en el primer caso de estudio
    $("#menuCEUSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").show(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });  

    //Accion al dar clic en el segundo caso de estudio
    $("#menuCEDSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").show(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Accion al dar clic en la linea de tiempo
    $("#menuLSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").show(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Accion al dar clic en el tercer caso de estudio
    $("#menuCETSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").show(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Accion al dar clic en la presentacion
    $("#menuPSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").show(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Accion al dar clic en el cuarto caso de estudio 
    $("#menuCECSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").show(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Accion al dar clic en el quinto caso de estudio
    $("#menuCEQSC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").show(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Accion al dar clic en trabajos individuales
    $("#menuTISC").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").show(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    });   

    //Ponencias 
    //Accion al dar clic en Ponencia 1
    $("#MPonen1").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").show(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 
    
    //Ponencias 
    //Accion al dar clic en Ponencia 2
    $("#MPonen2").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").show(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 3
    $("#MPonen3").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").show(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 4
    $("#MPonen4").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
       //Ponecias
       $("#Ponen1").hide(1000); 
       $("#Ponen2").hide(1000); 
       $("#Ponen3").hide(1000); 
       $("#Ponen4").show(1000); 
       $("#Ponen5").hide(1000); 
       $("#Ponen6").hide(1000); 
       $("#Ponen7").hide(1000); 
       $("#Ponen8").hide(1000); 
       $("#Ponen9").hide(1000); 
       $("#Ponen10").hide(1000); 
       $("#Ponen11").hide(1000); 
       $("#Ponen12").hide(1000); 
       $("#Ponen12").hide(1000);  
       //trabajos tercer corte
       $("#ObjetivoM").hide(1000);
       $("#ApuntesTC").hide(1000);
       $("#ApuntesTC2").hide(1000);
       $("#marcosTC").hide(1000);
       $("#divTCCasoP").hide(1000);
       $("#divTCCasoS").hide(1000);
       $("#divTCEjercicio").hide(1000); 
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 5
    $("#MPonen5").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").show(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 6
    $("#MPonen6").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").show(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 7
    $("#MPonen7").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").show(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 8 
    $("#MPonen8").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
       //Ponecias
       $("#Ponen1").hide(1000); 
       $("#Ponen2").hide(1000); 
       $("#Ponen3").hide(1000); 
       $("#Ponen4").hide(1000); 
       $("#Ponen5").hide(1000); 
       $("#Ponen6").hide(1000); 
       $("#Ponen7").hide(1000); 
       $("#Ponen8").show(1000); 
       $("#Ponen9").hide(1000); 
       $("#Ponen10").hide(1000); 
       $("#Ponen11").hide(1000); 
       $("#Ponen12").hide(1000); 
       $("#Ponen12").hide(1000);  
       //trabajos tercer corte
       $("#ObjetivoM").hide(1000);
       $("#ApuntesTC").hide(1000);
       $("#ApuntesTC2").hide(1000);
       $("#marcosTC").hide(1000);
       $("#divTCCasoP").hide(1000);
       $("#divTCCasoS").hide(1000);
       $("#divTCEjercicio").hide(1000); 
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 9
    $("#MPonen9").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").show(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000); 
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 10
    $("#MPonen10").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").show(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 11
    $("#MPonen11").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").show(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencia 12
    $("#MPonen12").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").show(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Ponencias 
    //Accion al dar clic en Ponencias
    $("#MPonen1").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").show(1000); 
    }); 

    //Tercer Corte
    //Accion al dar clic en Objetivo 
    $("#menuObjetivo").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").show(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 
    //Accion al dar clic apuntes
    $("#menuTCApuntes").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").show(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 
    //Accion al dar clic apuntes
    $("#menuTCApuntes2").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").show(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Accion al dar clic primer trabajo
    $("#menuTCMArcos").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").show(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").show(1000);
    }); 

    //Accion al dar clic segundo trabajo
    $("#menuTCCasoP").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").show(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").hide(1000);
    }); 

    //Accion al dar clic trabajo tres
    $("#menuTCCasoS").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
      //trabajos tercer corte
      $("#ObjetivoM").hide(1000);
      $("#ApuntesTC").hide(1000);
      $("#ApuntesTC2").hide(1000);
      $("#marcosTC").hide(1000);
      $("#divTCCasoP").hide(1000);
      $("#divTCCasoS").show(1000);
      $("#divTCEjercicio").hide(1000);
    }); 

    //Accion al dar clic trabajo cuatro
    $("#menuTCEjercicio").click(function(event){
        //ocultar trabajos del primer corte 
        $("#divInicio").hide("slow");         
        $("#divTrabajoClase").hide(1000);  
        $("#divCasoEst").hide(1000);       
        $("#divCuadro").hide(1000);    
        $("#divCasoE").hide(1000);    
        $("#divGlosario").hide(1000);       
        $("#divIndividual").hide(1000);
        //trabajos segundo corte 
        $("#divApuntesSC").hide(1000); 
        $("#divCEUSC").hide(1000);        
        $("#divCEDSC").hide(1000);        
        $("#divLSC").hide(1000);        
        $("#divCETSC").hide(1000);        
        $("#divPSC").hide(1000);        
        $("#divCECSC").hide(1000);        
        $("#divCEQSC").hide(1000);        
        $("#divTISC").hide(1000); 
        $("#divInicio").hide(1000); $("#divInicio").hide("slow");
        //Ponecias
        $("#Ponen1").hide(1000); 
        $("#Ponen2").hide(1000); 
        $("#Ponen3").hide(1000); 
        $("#Ponen4").hide(1000); 
        $("#Ponen5").hide(1000); 
        $("#Ponen6").hide(1000); 
        $("#Ponen7").hide(1000); 
        $("#Ponen8").hide(1000); 
        $("#Ponen9").hide(1000); 
        $("#Ponen10").hide(1000); 
        $("#Ponen11").hide(1000); 
        $("#Ponen12").hide(1000); 
        $("#Ponen12").hide(1000);  
        //trabajos tercer corte
        $("#ObjetivoM").hide(1000);
        $("#ApuntesTC").hide(1000);
        $("#ApuntesTC2").hide(1000);
        $("#marcosTC").hide(1000);
        $("#divTCCasoP").hide(1000);
        $("#divTCCasoS").hide(1000);
        $("#divTCEjercicio").show(1000);
    }); 

    
});



