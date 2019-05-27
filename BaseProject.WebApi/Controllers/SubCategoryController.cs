using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using BaseProject.Application.Category.Commands.CreateCategory;
using BaseProject.Application.Category.Commands.CreateSubCategory;
using BaseProject.Application.Category.Commands.DeleteCategory;
using BaseProject.Application.Category.Commands.DeleteSubCategory;
using BaseProject.Application.Category.Commands.UpdateCategory;
using BaseProject.Application.Category.Commands.UpdateSubCategory;
using BaseProject.Application.Category.Queries.GetAllSubCategories;
using BaseProject.Application.Category.Queries.GetSubCategoryDetail;
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
    public class SubCategoryController : BaseController
    {

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<SubCategoryListViewModel>> GetAll([FromQuery] GetSubCategoryListQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [HttpPost("Create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<int>> Create([FromBody] CreateSubCategoryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }


        /// <summary>
        /// Get user by id.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<SubCategoryDetailModel>> Get(Guid id)
        {
            return Ok(await Mediator.Send(new GetSubCategoryDetailQuery { SubCategoryId = id }));
        }


        /// delete user.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeleteSubCategoryCommand { SubCategoryId = id });
            return NoContent();
        }


        /// update user.
        /// </summary>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody] UpdateSubCategoryCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }


    }
}
