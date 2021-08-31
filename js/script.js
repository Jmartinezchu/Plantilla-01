var galeria1 =[1,2,3,4,5,6,7,8,9];
var galeria = document.getElementById('galeria');

        for(img of galeria1){
            galeria.innerHTML += `
                <div class="col-4 p-1">
                    <div class="card h-100 d-flex align-items-center " data-bs-toggle="modal" data-bs-target="#id${img}" >
                        <a href="#">
                            <img class="card-img-top" src="img/galeria1/${img}.jpg" alt="">
                        </a>
                    </div>                    
                </div>
                <!--Modal-->
                <div class="modal fade " id="id${img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <button type="button" class="btn-close m-4" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="modal-dialog  modal-md modal-dialog-scrollable" >
                        <div class="modal-content">
                            <img class="img-fluid rounded" src="img/galeria1/${img}.jpg" alt="">
                        </div>                      
                    </div>
                  </div>`
        }