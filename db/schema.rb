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

ActiveRecord::Schema.define(version: 2018_12_18_174146) do

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

  create_table "providers", force: :cascade do |t|
    t.string "fname"
    t.string "lname", null: false
    t.string "degree", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip", null: false
    t.string "county", null: false
    t.string "country", null: false
    t.string "email", null: false
    t.string "home_phone", null: false
    t.string "mobile_phone"
    t.string "work_phone"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
