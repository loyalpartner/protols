#include "google/protobuf/compiler/importer.h"
#include "google/protobuf/descriptor.h"
#include "google/protobuf/descriptor.pb.h"
#include "napi.h"

namespace google {
namespace protobuf {
class Descriptor;          // descriptor.h
class DescriptorDatabase;  // descriptor_database.h
class DescriptorPool;      // descriptor.h
class FileDescriptor;      // descriptor.h
class FileDescriptorSet;   // descriptor.h
class FileDescriptorProto; // descriptor.pb.h
} // namespace protobuf
} // namespace google
class LspInterface {

  auto Parse(const google::protobuf::FileDescriptor parsed_file) -> bool {
    return false;
  }
};

class ProtobufAddon : public Napi::Addon<ProtobufAddon> {
public:
  ProtobufAddon(Napi::Env env, Napi::Object exports) {
    DefineAddon(exports, {InstanceMethod("update", &ProtobufAddon::Update)});
    DefineAddon(exports, {InstanceMethod("analyze", &ProtobufAddon::Analyze)});
  }

private:
  auto Update(const Napi::CallbackInfo &info) -> Napi::Value {
    auto env = info.Env();
    return env.Null();
  }

  auto Analyze(const Napi::CallbackInfo &info) -> Napi::Value {
    auto env = info.Env();

    return env.Null();
  }
};

NODE_API_ADDON(ProtobufAddon) // NOLINT
