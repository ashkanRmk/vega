using System.Threading.Tasks;
using vega.Core.Models;
using vega.Core;
using System.Collections.Generic;

namespace vega.Core
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
        void AddVehicle(Vehicle vehicle);
        void DeleteVehicle(Vehicle vehicle);
        Task<IEnumerable<Vehicle>> GetVehicles(VehicleQuery filter);
    }
}