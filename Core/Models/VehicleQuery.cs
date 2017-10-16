using vega.Extensions;

namespace vega.Core.Models
{
    public class VehicleQuery : IQueryObject
    {
        //Filtering Params
        public int? MakeId { get; set; }
        public int? ModelId { get; set; }

        //Sorting Params
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }

        public int Page { get; set; }
        public byte PageSize { get; set; }
    }
}