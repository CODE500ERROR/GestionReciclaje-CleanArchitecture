using System.Collections.Generic;
using BaseProject.Application.Roles;
using BaseProject.Domain;
using Whoever.Common.Mapping;

namespace BaseProject.Application.Roles.GetAllRoles
{
    public class MunicipioLookupModel
    {
        public IList<MunicipioViewModel> Municipios { get; set; }
    }
}
