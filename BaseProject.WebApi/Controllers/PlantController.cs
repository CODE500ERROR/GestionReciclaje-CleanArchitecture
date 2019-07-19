using System;
using System.Threading.Tasks;
using BaseProject.Application.Plant.Commands.DeletePlant;
using BaseProject.Application.Plant.Commands.UpdatePlant;
using BaseProject.Application.Plant.CreatePlant;
using BaseProject.Application.Plant.Queries.GetAllPlant;
using BaseProject.Application.Plant.Queries.GetPlantDetail;
using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Application.Users.Queries.GetAllUsers;
using BaseProject.WebApi.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BaseProject.WebApi.Controller
{
    //[Authorize(Policy = "RequiredAdminRole")]
    public class PlantController : BaseController
    {

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<PlantListViewModel>> GetAll([FromQuery] GetPlantListQuery query)
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
        public async Task<ActionResult<int>> Create([FromBody] CreatePlantCommand command)
        {
            return Ok(await Mediator.Send(command));
        }


        /// <summary>
        /// Get user by id.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<PlantDetailModel>> Get(Guid id)
        {
            return Ok(await Mediator.Send(new GetPlantDetailQuery { PlantId = id }));
        }


        /// delete user.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]        
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeletePlantCommand { PlantId = id });
            return NoContent();
        }


        /// update user.
        /// </summary>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        [HttpPut]
        public async Task<IActionResult> Update([FromBody]UpdatePlantCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }

    }
}
