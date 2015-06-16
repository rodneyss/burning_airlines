# == Schema Information
#
# Table name: flights
#
#  id         :integer          not null, primary key
#  to         :text
#  from       :text
#  plane_id   :integer
#  date       :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Flight < ActiveRecord::Base
  belongs_to :plane
  has_many :reservations
end
