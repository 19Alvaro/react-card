import profilePic from './assets/foto.jpeg'

function Card(){ 
    return(
<div className="card">
    <img src={profilePic} alt="foto.jpeg" >
    </img>
  

<div className="general">
    <h2>INFORMACION GENERAL</h2>
    <p>Nombre:ALVARO ALONSO CAMPOS</p>
    <p>Profesion: Estudiante ING SOFTWARE Y REDES</p>
    <p>Telefono: 512-2879547</p>
    <p>Direccion: 2216 wagon crossing path, Austin, Texas zip 78744</p>
    <p>Correo Electronico: elojalu@hotmail.com</p>
    </div>
    <div className = "Experiencia">
    <h3>Experiencia laboral</h3>
    
    <p>McDonals: Cocinero, Tomando ordenes, Tomando efectivo </p>
    <p>P'Terrys: Cocinero</p>
    <p>Chick Fil A: Cocina</p>
    <p>Popeyes Chicken: Manager</p>
</div>
<div className ="educacion">
    <h4>Academica</h4>
    <p>UNIVERSIDAD TECONOGICA DE MEXICO </p>
    <p>ING. SOFTWARE Y REDES</p>
    <p>PREPARATORIA INSTITUTO POLICTECNICO NACIONAL</p>
    <p>DIPLOMA TECNICO ELECTRICISTA</p>
    <p>IDIOMAS:  INGLES Y ESPAÑOL</p>
</div>

</div>

    );
    
}

export default Card