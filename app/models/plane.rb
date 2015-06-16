# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string
#  row        :integer
#  column     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Plane < ActiveRecord::Base
  has_many :flights
end
