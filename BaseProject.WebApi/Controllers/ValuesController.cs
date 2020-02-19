using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using BaseProject.Application.Roles;
using BaseProject.Application.Roles.GetAllRoles;
using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Application.Users.Queries.GetAllUsers;
using BaseProject.WebApi.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BaseProject.WebApi.Controller
{
    //[Authorize()]
    public class ValuesController : BaseController
    {
        [HttpGet]
        public string Get()
        {
            return "Its work";
        }

    }
}
