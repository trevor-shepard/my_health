# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_25_010448) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "provider_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "start", null: false
    t.datetime "end", null: false
    t.text "notes"
    t.string "reason"
    t.index ["provider_id"], name: "index_appointments_on_provider_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "clinics", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "state", null: false
    t.integer "zip", null: false
    t.string "county", null: false
    t.string "phone", null: false
    t.string "fax", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "suite"
    t.string "city"
  end

  create_table "medications", force: :cascade do |t|
    t.string "generic_name", null: false
    t.string "brand_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prescriptions", force: :cascade do |t|
    t.integer "medication_id", null: false
    t.integer "provider_id", null: false
    t.integer "user_id", null: false
    t.integer "count", null: false
    t.integer "refills", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "dosage"
    t.string "admin_type"
    t.boolean "request_pending", null: false
    t.index ["medication_id"], name: "index_prescriptions_on_medication_id"
    t.index ["provider_id"], name: "index_prescriptions_on_provider_id"
    t.index ["user_id"], name: "index_prescriptions_on_user_id"
  end

  create_table "providers", force: :cascade do |t|
    t.string "fname"
    t.string "lname", null: false
    t.string "degree", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "primary_clinic_id", null: false
    t.string "specialty"
    t.index ["primary_clinic_id"], name: "index_providers_on_primary_clinic_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.integer "clinic_id", null: false
    t.integer "provider_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "start", null: false
    t.datetime "end", null: false
    t.index ["clinic_id"], name: "index_shifts_on_clinic_id"
    t.index ["provider_id"], name: "index_shifts_on_provider_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "username", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.date "dob", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "county"
    t.string "country"
    t.string "email"
    t.string "home_phone"
    t.string "mobile_phone"
    t.string "work_phone"
    t.string "preferred_phone", default: "home"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
