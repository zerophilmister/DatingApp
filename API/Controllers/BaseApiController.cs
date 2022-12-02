using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    //need the apicontroller reference to bind the data to the controllers.
    //also lets validation be done in the dto 
    //which is done before getting to the other controllers
    [ApiController]
    [Route("api/[controller]")] 
    public class BaseApiController : ControllerBase
    {
        
    }
}