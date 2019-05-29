using System;
using System.Collections.Generic;
using Whoever.Entities;
using Whoever.Entities.Interfaces;

namespace BaseProject.Domain
{
    public class Municipio : IHasCreationTime, ISoftDelete
    {

        public Municipio()
        {
            Plants = new List<BaseProject.Domain.Plant>();
        }
        public Guid MunicipioId{ get; set; }
        public string Name { get; set; }
        public DateTime CreationTime { get; set; }
        public bool IsDeleted { get; set; }

        public virtual IList<BaseProject.Domain.Plant> Plants { get; set; }
       
    }
}
