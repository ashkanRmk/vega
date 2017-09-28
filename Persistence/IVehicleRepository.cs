using System.Threading.Tasks;
using vega.Models;

namespace vega.Persistence
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
        void AddVehicle(Vehicle vehicle);
        void DeleteVehicle(Vehicle vehicle)

    }
}