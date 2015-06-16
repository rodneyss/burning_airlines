json.array!(@flights) do |flight|
  json.extract! flight, :id, :to, :from, :plane_id, :date
  json.url flight_url(flight, format: :json)
end
