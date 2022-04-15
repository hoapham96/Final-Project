import React from "react";
import Mewtwo2 from "../../img/mewtwo2.jpg";
import 'bootstrap/dist/css/bootstrap.css';


function Profile() {
   
  
    return (

<div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 bg-dark">
                <div class="media align-items-end profile-header">
                
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">PROFILE VIEW</h4>
                        <h2>Username</h2>
                    </div>
                </div>
            </div>

            <div class="bg-light p-4 d-flex justify-content-end text-center">
                
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Favorites</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Friends</small>
                    </li>
                </ul>
            </div>


                <div class="py-4">
                    <h5 class="mb-3">Recent Likes</h5>
                    <div class="p-4 bg-light rounded shadow-sm">
                        <div class="row">
                            <div class="col">
                                <img src={Mewtwo2}></img>
                            <p class="font-italic mb-0">Pokemon Card</p>
                        <ul class="list-inline small text-muted mt-3 mb-0">
                            <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>0 likes</li>
                            <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>0 comments</li>
                        </ul>


                            </div>

                            <div class="col">
                            <img src={Mewtwo2}></img>
                            <p class="font-italic mb-0">Pokemon Card</p>
                        <ul class="list-inline small text-muted mt-3 mb-0">
                            <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>0 likes</li>
                            <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>0 comments</li>
                        </ul>


                            </div>

                            <div class="col">
                            <img src={Mewtwo2}></img>
                            <p class="font-italic mb-0">Pokemon Card</p>
                        <ul class="list-inline small text-muted mt-3 mb-0">
                            <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>0 likes</li>
                            <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>0 comments</li>
                        </ul>


                            </div>
                

                        </div>
                        
                    </div>
                </div>
            </div>



);
}

export default Profile;