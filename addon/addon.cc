#include "google/protobuf/descriptor.pb.h"
#include "napi.h"

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

    /* google::protobuf::compiler::CommandLineInterface cli; */
    // google::protobuf::FileDescriptorProto file;

    return env.Null();
  }
};

NODE_API_ADDON(ProtobufAddon) // NOLINT
