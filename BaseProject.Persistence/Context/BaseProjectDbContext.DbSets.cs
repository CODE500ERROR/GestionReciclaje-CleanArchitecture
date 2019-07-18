using Microsoft.EntityFrameworkCore;
using BaseProject.Domain;

namespace BaseProject.Persistence
{
    public partial class BaseProjectDbContext
    {
  
        #region Common

        //public virtual DbSet<Address> Addresses { get; set; }
        //public virtual DbSet<CreditCard> CreditCards { get; set; }
        //public virtual DbSet<Day> Days { get; set; }
        //public virtual DbSet<EmailNotificationBatch> EmailNotificationBatches { get; set; }
        //public virtual DbSet<FingerPrint> FingerPrints { get; set; }
        //public virtual DbSet<Notification> Notifications { get; set; }
        //public virtual DbSet<Setting> Settings { get; set; }
        //public virtual DbSet<State> States { get; set; }

        #endregion


        #region reciclaje
        public virtual DbSet<Municipio> Municipios { get; set; }
        public virtual DbSet<Plant> Plants{ get; set; }
        public virtual DbSet<Category> Categories{ get; set; }
        public virtual DbSet<Product> Products{ get; set; }
        public virtual DbSet<Separation> Separations { get; set; }
        #endregion
    }
}
