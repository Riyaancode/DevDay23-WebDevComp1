const Organization = require("../models/Organization");
const User = require("../models/User");

// Add Organization Name
const addOrganization = (req, res) => {
  console.log("ADD Organization WORKING ");

  const organization = new Organization({
    name: req.body.name,
  });
  organization
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Get All Organizations
const getOrganization = async (req, res) => {
  try {
    const organization = await Organization.find();
    if (organization.length === 0) {
      return res.status(404).json({ message: "No Organization Found" });
    }
    res.status(200).json(organization);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// Adding Member to Organization
const addMemberToOrganization = async (req, res) => {
  try {
    const { userID, organizationID } = req.body;
    const organization = await Organization.findById(organizationID);
    const user = await User.findById(userID);

    if (!organization || !user) {
      return res
        .status(404)
        .json({ message: "Organization or user not found" });
    }

    organization.members.push(user);
    await organization.save();
    res
      .status(200)
      .json({ message: "Member added successfully", organization });
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Remove Member from Organization
const removeMemberFromOrganization = async (req, res) => {
  try {
    const { organizationID, userID } = req.body;
    const organization = await Organization.findById(organizationID);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    organization.members = organization.members.filter(
      (member) => member.toString() !== userID
    );
    await organization.save();
    return res
      .status(200)
      .json({ message: "Member removed successfully", organization });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  addOrganization,
  getOrganization,
  addMemberToOrganization,
  removeMemberFromOrganization,
};
