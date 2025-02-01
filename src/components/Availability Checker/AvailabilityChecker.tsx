import { useState } from 'react';
import { useGetAvailabilityQuery } from '../../redux/features/admin/feacilityManagement';

const AvailabilityChecker = ({ facilityId }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const { data, error, isLoading } = useGetAvailabilityQuery({
    date: selectedDate,
    facility: facilityId,
  });

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.availableSlots?.length ? (
        <ul>
          {data.availableSlots.map((slot) => (
            <li key={slot}>{slot}</li>
          ))}
        </ul>
      ) : (
        <p>No slots available</p>
      )}
    </div>
  );
};

export default AvailabilityChecker;
