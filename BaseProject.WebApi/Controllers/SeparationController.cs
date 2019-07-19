using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using BaseProject.Application.Roles;
using BaseProject.Application.Roles.GetAllRoles;
using BaseProject.Application.Separation.Commands;
using BaseProject.Application.Separation.Queries;
using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Application.Users.Queries.GetAllUsers;
using BaseProject.WebApi.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BaseProject.WebApi.Controller
{
    //[Authorize()]
    public class SeparationController : BaseController
    {

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<SeparationListViewModel>> GetAll([FromQuery] GetSeparationListQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [HttpPost()]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<int>> Create([FromBody] CreateSeparationCommand command)
        {
            return Ok(await Mediator.Send(command));
        }


        /// <summary>
        /// Get user by id.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<SeparationDetailModel>> Get(Guid id)
        {
            return Ok(await Mediator.Send(new GetSeparationDetailQuery { SeparationId = id }));
        }


        /// delete user.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeleteSeparationCommand { SeparationId = id });
            return NoContent();
        }


        /// update user.
        /// </summary>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        [HttpPut]
        public async Task<IActionResult> Update([FromBody]UpdateSeparationCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }

    }
}
