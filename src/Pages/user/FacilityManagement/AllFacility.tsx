import { useGetAllFacilityQuery } from "../../../redux/features/admin/feacilityManagement";

const AllFacility = () => {
    const {data} = useGetAllFacilityQuery(undefined);
    console.log(data)
    return (
        <div>
            <h1>All facality</h1>
        </div>
    );
};

export default AllFacility;